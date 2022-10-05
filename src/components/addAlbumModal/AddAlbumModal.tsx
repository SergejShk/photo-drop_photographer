import React, { useState } from 'react';
import moment from 'moment';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addNewAlbumThunk } from '../../redux/album/albumOperations';
import { BackdropStyled } from './AddAlbumModal.styled';

interface IProps {
  closeModal: () => void;
}

const normalizedDate = moment().format('YYYY-MM-DD');

const AddAlbumModal: React.FC<IProps> = ({ closeModal }) => {
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>(normalizedDate);

  const dispatch = useAppDispatch();

  const onOverlayClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.target === e.currentTarget && closeModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'location') setLocation(value);
    if (name === 'date') setDate(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addNewAlbumThunk({ name, location, date }));

    resetForm();
    closeModal();
  };

  const resetForm = () => {
    setName('');
    setLocation('');
    setDate(normalizedDate);
  };

  return (
    <BackdropStyled onClick={onOverlayClick}>
      <div className="modal">
        <form onSubmit={handleSubmit}>
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
