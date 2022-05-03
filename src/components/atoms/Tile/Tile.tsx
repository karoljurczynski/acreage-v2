import { TileIcon, Wrapper } from "./styles";
import { TILE_PRESET } from "./constants";


const Tile: React.FC<TileProps> = ({ icon, type, title }) => {
  const { color, clickable } = TILE_PRESET[type];

  return (
    <Wrapper color={color} clickable={clickable} title={title}>
      <TileIcon src={icon} alt={title} />
    </Wrapper>
  )
}


export default Tile;