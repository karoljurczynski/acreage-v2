import { Wrapper, Title, LogoBackground, LogoImage } from "./styles";
import logo from "../../../images/logo.png";


const Logo: React.FC = () => {
  return (
    <Wrapper>
      <LogoBackground>
        <LogoImage src={logo} />
      </LogoBackground>
      <Title as="h1">Acreage</Title>
    </Wrapper>
  )
}


export default Logo;