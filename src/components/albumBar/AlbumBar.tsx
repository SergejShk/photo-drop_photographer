import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import { DragDrop } from '@uppy/react';
import { getAlbumData } from '../../services/userDataApi';
import { AlbumContainerStyled } from './AlbumBar.styled';
import sprite from '../../assets/sprite.svg';

const uppy = new Uppy({
  meta: { type: 'photos' },
  restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true,
});

uppy.on('complete', result => {
  console.log('success');
});

let albumId: string | undefined = '';

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

const AlbumBar: React.FC = () => {
  const params = useParams();

  albumId = params.albumName;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    params.albumName && getAlbumData(params.albumName);
  };

  return (
    <AlbumContainerStyled>
      <Link to="/albums" className="link">
        <svg className="icon">
          <use href={sprite + '#icon-Back-Arrow'} />
        </svg>{' '}
        Go back
      </Link>
      <button type="submit" className="btn" onClick={handleClick}>
        Upload photo
      </button>
      <div className="dragNdrop"></div>
      <DragDrop
        uppy={uppy}
        locale={{
          strings: {
            dropHereOr: 'Drop here or %{browse}',
            browse: 'browse',
          },
        }}
      />
    </AlbumContainerStyled>
  );
};

export default AlbumBar;
