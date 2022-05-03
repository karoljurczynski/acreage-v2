import { LogoImage, Wrapper } from "./Logo.styles";
import logo from "../../../images/logo.png";


const Logo: React.FC = () => (
  <Wrapper>
    <LogoImage src={logo} alt="Logo" />
  </Wrapper>
);


export default Logo;