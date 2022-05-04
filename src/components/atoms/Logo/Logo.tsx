import { Wrapper, Title, LogoBackground, LogoImage } from "./styles";
import logo from "../../../images/logo.png";
import { NavigateFunction, useNavigate } from "react-router-dom";


const Logo: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const handleClick = (): void => { navigate('/') };
  
  return (
    <Wrapper onClick={handleClick}>
      <LogoBackground>
        <LogoImage draggable={false} src={logo} />
      </LogoBackground>
      <Title as="h1">Acreage</Title>
    </Wrapper>
  )
}


export default Logo;