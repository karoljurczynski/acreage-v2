import { NavigateFunction, useNavigate } from "react-router-dom";
import Tile from "../Tile/Tile";
import { InfoButton, Version, Wrapper } from "./styles";
import { TILE_TYPE } from "../Tile/constants";

import info from "../../../images/icons/menu/info.png";


const About: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const handleClick = (): void => { navigate('/about') };

  return (
    <Wrapper>
      <InfoButton onClick={handleClick} title="Learn more">
        <Tile type={TILE_TYPE.INFO_BUTTON} icon={info} />
      </InfoButton>
      <Version>version 1.0</Version>
    </Wrapper>
  )
}


export default About;