import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import { DragDrop } from '@uppy/react';

const InputLoadFiles: React.FC = () => {
  const params = useParams();
  const albumId = params.albumName;

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

  uppy.on('file-added', file => {
    uppy.removeFile(file.id);
  });

  uppy.on('complete', result => {
    console.log('upload successful');
  });

  return (
    <DragDrop
      uppy={uppy}
      locale={{
        strings: {
          dropHereOr: 'upload',
          browse: 'browse',
        },
      }}
    />
  );
};

export default InputLoadFiles;
