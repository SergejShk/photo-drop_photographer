import { HeaderStyled } from './Header.styled';
import sprite from '../../assets/sprite.svg';

const Header = () => {
  return (
    <HeaderStyled>
      <svg className="logo">
        <use href={sprite + '#icon-Logo'} />
      </svg>
    </HeaderStyled>
  );
};

export default Header;
