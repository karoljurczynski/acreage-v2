import styled from "styled-components";
import COLORS from "../../../tools/styles/colors";


export const Wrapper = styled.a<MenuItemWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px;
  padding: 8px 0;
  cursor: pointer;

  :hover { background-color: ${COLORS.WHITE} }

  ${props => props.active && `background-color: ${COLORS.WHITE}`};
`;