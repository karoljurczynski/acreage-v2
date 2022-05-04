import styled from "styled-components";
import COLORS from "../../../tools/styles/colors";
import Text from "../Text/Text.styles";
import {Wrapper as Tile} from '../Tile/styles';


export const MenuItemTitle = styled(Text)`
  background-color: ${COLORS.ORANGE};
  width: fit-content;
  padding: 8px 12px;
  border-radius: 5px;
  position: absolute;
  left: 8px;
  opacity: 0;
  transition: 0.5s ease;
  transform: translateX(-100%);
  user-select: none;

`;

export const Wrapper = styled.a<MenuItemWrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px;
  padding: 8px 0;
  cursor: pointer;

  :hover {
    background-color: ${COLORS.WHITE};
    ${Tile} {
      transform: translateX(calc(100% - 8px));
    }
    ${MenuItemTitle} {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  ${props => props.active && `background-color: ${COLORS.WHITE}`};
`;