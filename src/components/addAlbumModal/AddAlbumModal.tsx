import React, { useState } from 'react';
import moment from 'moment';
import { BackdropStyled } from './AddAlbumModal.styled';

interface IProps {
  closeModal: () => void;
}

const normalizedDate = moment().format('YYYY-MM-DD');

const AddAlbumModal: React.FC<IProps> = ({ closeModal }) => {
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>(normalizedDate);

  const onOverlayClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.target === e.currentTarget && closeModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'location') setLocation(value);
    if (name === 'date') setDate(value);
  };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();

  //     dispatch(logInThunk({ email, password }));

  //     resetForm();
  //   };

  //   const resetForm = () => {
  //     setName('');
  //     setLocation('');
  //   };

  return (
    <BackdropStyled onClick={onOverlayClick}>
      <div className="modal">
        <form>
          <input
            className="addAlbum__input"
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            className="addAlbum__input"
            type="text"
            name="location"
            value={location}
            placeholder="Location"
            onChange={handleChange}
          />
          <input
            className="addAlbum__input"
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
          />
          <button type="submit" className="addAlbum__btn">
            Save
          </button>
        </form>
      </div>
    </BackdropStyled>
  );
};

export default AddAlbumModal;
