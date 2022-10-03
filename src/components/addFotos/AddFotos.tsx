import React, { useState } from 'react';

const AddFotos: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };
  return (
    <input
      type="file"
      multiple
      accept="image/*,.jpg,.jpeg,.png,"
      onChange={handleChange}
    />
  );
};
export default AddFotos;
