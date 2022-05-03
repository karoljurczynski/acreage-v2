import Tile from "../../atoms/Tile/Tile";
import AcreageLogo from "../../molecules/AcreageLogo/AcreageLogo"
import { Wrapper } from "./MainMenu.styles";
import farm from '../../../images/icons/menu/farm.png';
import { TILE_TYPE } from "../../atoms/Tile/constants";


const MainMenu: React.FC = () => {
	return (
		<Wrapper>
			<AcreageLogo />
			<Tile icon={ farm } type={ TILE_TYPE.MENU_ITEM } title="Farm" />
		</Wrapper>
	)
}


export default MainMenu;