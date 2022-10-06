import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import { DragDrop } from '@uppy/react';
import { LabelLoadFilesStyled } from './labelLoadFiles.styled';

const InputLoadFiles: React.FC = () => {
  const params = useParams();
  const albumId = params.albumId;

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
    // post numbers loadedPhotos albumid
    ids.map(file => uppy.removeFile(file));
    loadedPhotos = [];
    ids = [];
    console.log('upload successful');
  });

  return (
    <>
      <LabelLoadFilesStyled>
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
      </LabelLoadFilesStyled>
    </>
  );
};

export default InputLoadFiles;
