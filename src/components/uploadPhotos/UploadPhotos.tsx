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
  DashboardWrapper,
  Form,
  // InputPhone,
  InputWrapper,
} from './UploadPhotos.style';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addPhotoThunk } from '../../redux/album/albumOperations';
import { AiOutlineClose } from 'react-icons/ai';

const UploadPhotos = () => {
  const [phones, setPhones] = useState(['']);

  const dispatch = useAppDispatch();
  const params = useParams();
  const albumId = params.albumId;

  const handleChangeInput = (val: string, idx: number) => {
    const inputData = [...phones];
    inputData[idx] = '+' + val;
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
    dispatch(addPhotoThunk(file.xhrUpload.endpoint));
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

  const validatedPhones = phones.filter(phone => phone.length > 6);

  return (
    <>
      <BtnAddInput type="button" onClick={onClickAddPhone}>
        Add phone
      </BtnAddInput>

      <Form>
        {phones.map((phone, idx) => (
          <InputWrapper key={idx}>
            <PhoneInput
              country="us"
              enableSearch
              disableSearchIcon
              value={phone}
              onChange={val => handleChangeInput(val, idx)}
              inputStyle={{
                background: '#F4F4F4',
                width: '287px',
                padding: '5px 30px 5px 10px',
                marginLeft: '58px',
                border: '1px solid #EEEEEE',
                borderRadius: '10px',
                color: '#262626',
              }}
              buttonStyle={{
                background: '#F4F4F4',
                border: '1px solid #EEEEEE',
                borderRadius: '10px',
                width: '50px',
                paddingLeft: '3px',
              }}
            />

            {phones.length > 1 && (
              <BtnRemoveInput
                type="button"
                onClick={() => onClickRemovePhone(idx)}
              >
                <AiOutlineClose />
              </BtnRemoveInput>
            )}
          </InputWrapper>
        ))}
      </Form>

      {validatedPhones.length === phones.length && (
        <DashboardWrapper>
          <Dashboard uppy={uppy} plugins={['Dashboard']} />
        </DashboardWrapper>
      )}
    </>
  );
};

export default UploadPhotos;
