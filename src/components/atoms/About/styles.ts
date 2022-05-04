import styled from "styled-components";
import COLORS from "../../../tools/styles/colors";
import Text from "../Text/Text.styles";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
`;

export const InfoButton = styled.a`
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
  transition: 0.2s ease;

  :hover { transform: translateY(-4px) }
`;

export const Version = styled(Text)`
  color: ${COLORS.DARK_GRAY};
  font-size: 18px;

`;