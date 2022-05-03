import { Wrapper, Title } from "./styles";
import Logo               from "../../atoms/Logo/Logo";


const AcreageLogo: React.FC = () => (
  <Wrapper>
    <Logo />
    <Title as="h1">Acreage</Title>
  </Wrapper>
);


export default AcreageLogo;