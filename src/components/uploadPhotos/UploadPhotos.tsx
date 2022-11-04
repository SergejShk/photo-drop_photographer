import { useState } from 'react';
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { savePhotosWithNumbers } from '../../services/userDataApi';
import {
  BtnAddInput,
  BtnRemoveInput,
  Form,
  InputPhone,
  InputWrapper,
} from './UploadPhotos.style';

const UploadPhotos = () => {
  const [phones, setPhones] = useState(['']);

  const params = useParams();
  const albumId = params.albumId;

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const inputData = [...phones];
    inputData[idx] = e.target.value;
    setPhones(inputData);
  };

  const onClickAddPhone = (e: React.MouseEvent<HTMLElement>) => {
    setPhones([...phones, '']);
  };

  const onClickRemovePhone = (idx: number) => {
    const inputData = [...phones];

    setPhones(inputData.filter((input, i) => i !== idx));
  };

  const uppy = new Uppy({
    meta: { type: 'photos' },
    restrictions: { maxNumberOfFiles: 100 },
    autoProceed: false,
  });

  uppy.use(AwsS3, {
    async getUploadParameters(file): Promise<any> {
      try {
        const { data } = await axios.post(`/upload/${albumId}`, {
          extension: file.name.split('.').reverse()[0],
        });

        return {
          method: data.data.method,
          url: data.data.url,
          fields: data.data.fields,
          headers: {
            'Content-Type': file.type,
          },
        };
      } catch (error) {
        console.log(error);
      }
    },
  });

  let loadedPhotos: string[] = [];
  let ids: string[] = [];

  uppy.on('upload-success', file => {
    loadedPhotos.push(
      // @ts-ignore
      file.xhrUpload.endpoint.split('?')[0].split('/').at(-1).split('.')[0]
    );
    ids.push(file!.id);

    // @ts-ignore
    // dispatch(addPhotoThunk(file.xhrUpload.endpoint));
  });

  uppy.on('complete', async result => {
    albumId &&
      (await savePhotosWithNumbers({
        numbers: phones,
        photos: loadedPhotos,
        albumId,
      }));

    ids.map(file => uppy.removeFile(file));
    loadedPhotos = [];
    ids = [];
  });

  return (
    <>
      <Form>
        {phones.map((phone, idx) => (
          <InputWrapper key={idx}>
            <InputPhone
              type="tel"
              placeholder="Enter phone"
              value={phone}
              onChange={e => handleChangeInput(e, idx)}
            />

            <BtnRemoveInput
              type="button"
              onClick={e => onClickRemovePhone(idx)}
            >
              X
            </BtnRemoveInput>
          </InputWrapper>
        ))}
      </Form>

      <BtnAddInput type="button" onClick={onClickAddPhone}>
        Add phone
      </BtnAddInput>

      <Dashboard uppy={uppy} plugins={['Webcam']} />
    </>
  );
};

export default UploadPhotos;
