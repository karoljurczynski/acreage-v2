import { TileIcon, Wrapper } from "./styles";
import { TILE_PRESET } from "./constants";


const Tile: React.FC<TileProps> = ({ icon, type, title }) => {
  return (
    <Wrapper {...TILE_PRESET[type]}>
      <TileIcon draggable={false} src={icon} alt={title} />
    </Wrapper>
  )
}


export default Tile;