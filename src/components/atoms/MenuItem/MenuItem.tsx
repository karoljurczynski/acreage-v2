import Tile from "../Tile/Tile";
import { TILE_TYPE } from "../Tile/constants";
import { MenuItemTitle, Wrapper } from "./styles";
import { NavigateFunction, useNavigate } from "react-router-dom";


const MenuItem: React.FC<MenuItemProps> = ({ title, icon, navigateTo, active }) => {
  const navigate: NavigateFunction = useNavigate();
  const handleClick = (): void => { navigate(navigateTo) };

  return (
    <Wrapper onClick={handleClick} title={title} active={active}>
      <MenuItemTitle>{title}</MenuItemTitle>
      <Tile type={TILE_TYPE.MENU_ITEM} icon={icon} />
    </Wrapper>
  )
}


export default MenuItem;