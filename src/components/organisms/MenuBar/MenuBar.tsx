import Tile from "../../atoms/Tile/Tile";
import { Wrapper } from "./styles";
import { TILE_TYPE } from "../../atoms/Tile/constants";
import Logo from "../../atoms/Logo/Logo";
import MainMenu from "../../molecules/MainMenu/MainMenu";


const MenuBar: React.FC = () => {
	return (
		<Wrapper>
			<Logo />
			<MainMenu />
		</Wrapper>
	)
}


export default MenuBar;