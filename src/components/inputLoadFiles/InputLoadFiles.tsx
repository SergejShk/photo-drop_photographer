import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import { DragDrop } from '@uppy/react';
import { ContainerLoadFilesStyled } from './labelLoadFiles.styled';
import { savePhotosWithNumbers } from '../../services/userDataApi';

const InputLoadFiles: React.FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [phoneToSend, setPhoneToSend] = useState<string[]>([]);
  const [sendSeccessful, setSendSeccessful] = useState<string>('');

  const params = useParams();
  const albumId = params.albumId;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSendSeccessful('');
    setPhone(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPhoneToSend(prev => [...prev, phone]);
    setPhone('');
  };

  const uppy = new Uppy({
    meta: { type: 'photos' },
    restrictions: { maxNumberOfFiles: 100 },
    autoProceed: true,
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
  });

  uppy.on('complete', result => {
    albumId &&
      savePhotosWithNumbers({
        numbers: phoneToSend,
        photos: loadedPhotos,
        albumId,
      });

    setPhoneToSend([]);
    setSendSeccessful('seccessful');

    ids.map(file => uppy.removeFile(file));
    loadedPhotos = [];
    ids = [];
  });

  return (
    <ContainerLoadFilesStyled>
      <form className="formEnterPhone" onSubmit={handleSubmit}>
        <input
          className="inputPhone"
          type="tel"
          name="phone"
          placeholder="Enter phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />{' '}
        <button type="submit" className="btn">
          Save phone
        </button>
      </form>
      {phoneToSend.length > 0 && (
        <label className="labelLoadFile">
          Upload photo
          <DragDrop
            className="hidden"
            uppy={uppy}
            locale={{
              strings: {
                dropHereOr: 'upload',
                browse: 'browse',
              },
            }}
          />
        </label>
      )}
      {sendSeccessful && <p className='text'>Photos sent successfully</p>}
    </ContainerLoadFilesStyled>
  );
};

export default InputLoadFiles;
