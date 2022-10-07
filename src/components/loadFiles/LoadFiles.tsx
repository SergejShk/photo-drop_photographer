import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import { DragDrop } from '@uppy/react';
import { savePhotosWithNumbers } from '../../services/userDataApi';
import {
  Container,
  TextInfo,
  LabelLoadFiles,
  Form,
  Button,
  InputPhone,
} from './LoadFiles.styled';

const LoadFiles: React.FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [isSavedPhone, setIsSavedPhone] = useState<boolean>(false);
  const [phoneToSend, setPhoneToSend] = useState<string[]>([]);
  const [sendSeccessful, setSendSeccessful] = useState<string>('');

  const params = useParams();
  const albumId = params.albumId;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setIsSavedPhone(false);
    setSendSeccessful('');
    setPhone(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPhoneToSend(prev => [...prev, phone]);
    setIsSavedPhone(true);
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
    setIsSavedPhone(false);
    setSendSeccessful('seccessful');

    ids.map(file => uppy.removeFile(file));
    loadedPhotos = [];
    ids = [];
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TextInfo className={isSavedPhone ? 'active' : ''}>
          Number saved seccessfully
          <br />
          You can enter next number
        </TextInfo>

        <InputPhone
          type="tel"
          name="phone"
          placeholder="Enter phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />

        <Button type="submit" className="btn">
          Save phone
        </Button>
      </Form>

      {phoneToSend.length > 0 && (
        <LabelLoadFiles>
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
        </LabelLoadFiles>
      )}

      <TextInfo className={sendSeccessful ? 'active' : ''}>
        Photos sent successfully
      </TextInfo>
    </Container>
  );
};

export default LoadFiles;
