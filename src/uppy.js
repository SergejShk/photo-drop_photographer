import Uppy from '../node_modules/@uppy/core';
import Dashboard from '../node_modules/@uppy/dashboard';
import AwsS3 from '../node_modules/@uppy/aws-s3';

const uppy = new Uppy({
  debug: true,
});

uppy.use(Dashboard, {
  inline: true,
  target: 'body',
});

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImxvZ2luIjpudWxsLCJwYXNzd29yZCI6IiQyYSQxMCRIeTVQOVNLM0lkdldoa1RINERWVWxPYmRCV3VrWFpXV3BNaDFjb2ptRlJuL05RU1QxQjluZSIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJmdWxsTmFtZSI6InVuZGVmaW5lZCIsImlhdCI6MTY2NDg3MDMzMiwiZXhwIjoxNjY0OTU2NzMyfQ.CH6OyfA0rYxhdDOb7JXJJEJNrvw_rVQwldbBMfStTdk';
const albumId = '0c8a1512-2650-4c91-a23b-677d504cfa78';
let photos = [];
const numbers = ['+380973437754', '+380111111111'];
uppy
  .use(AwsS3, {
    async getUploadParameters(file) {
      try {
        const response = await fetch(
          `http://localhost:3000/dev/upload/${albumId}`,
          {
            method: 'post',
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: token,
            },
            body: JSON.stringify({
              extension: file.name.split('.').at(-1),
            }),
          }
        );
        const { data } = await response.json();
        photos.push(data.key);
        return {
          method: data.method,
          url: data.url,
          fields: data.fields,
          headers: {
            'Content-Type': file.type,
          },
        };
      } catch (err) {
        console.log(err);
      }
    },
  })
  .addPostProcessor(() => {
    fetch('http://localhost:3000/dev/saveNumbers', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        numbers,
        photos,
        albumId,
      }),
    }).then((data, err) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
    photos = [];
  });
