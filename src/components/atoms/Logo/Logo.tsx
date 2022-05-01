import { LogoImage, LogoWrapper } from "./Logo.styles";
import logo from "../../../images/logo.png";


const Logo: React.FC = () => (
  <LogoWrapper align="center" justify="center">
    <LogoImage src={logo} alt="Logo" />
  </LogoWrapper>
)


export default Logo;