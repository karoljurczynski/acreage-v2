import { TILE_TYPE } from "../Tile/constants";
import Tile from "../Tile/Tile";
import { ToolbarButton, ToolbarData, ToolbarTitle, Wrapper } from "./styles";

import filter from '../../../images/icons/menu/filter.png';

const Toolbar: React.FC = () => {
  return (
    <Wrapper>


      <ToolbarData>

      </ToolbarData>


      <ToolbarTitle>
        
      </ToolbarTitle>


      <ToolbarButton>
        <Tile type={TILE_TYPE.TOOLBAR_BUTTON} icon={filter} />
      </ToolbarButton>


    </Wrapper>
  )
}


export default Toolbar;