import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import moment from 'moment';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addNewAlbumThunk } from '../../redux/album/albumOperations';
import {
  BackdropStyled,
  Modal,
  Input,
  ButtonSubmit,
  ButtonClose,
} from './AddAlbumModal.styled';

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
      <Modal>
        <ButtonClose type="button" onClick={() => closeModal()}>
          <AiOutlineClose className="icon" />
        </ButtonClose>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            required
            onChange={handleChange}
          />

          <Input
            type="text"
            name="location"
            value={location}
            placeholder="Location"
            required
            onChange={handleChange}
          />

          <Input
            className="date"
            type="date"
            name="date"
            required
            value={date}
            onChange={handleChange}
          />
          <ButtonSubmit type="submit">Save</ButtonSubmit>
        </form>
      </Modal>
    </BackdropStyled>
  );
};

export default AddAlbumModal;
