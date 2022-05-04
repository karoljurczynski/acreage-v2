import { Wrapper } from "./styles";
import Logo from "../../atoms/Logo/Logo";
import About from "../../atoms/About/About";
import MainMenu from "../../molecules/MainMenu/MainMenu";


const MenuBar: React.FC = () => {
	return (
		<Wrapper>
			<Logo />
			<MainMenu />
			<About />
		</Wrapper>
	)
}


export default MenuBar;