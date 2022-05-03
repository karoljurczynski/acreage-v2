import styled from "styled-components";
import COLORS from "../../../tools/styles/colors";
import Text from "../../atoms/Text/Text.styles";


export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: fit-content;
`;

export const Title = styled(Text)`
	color: ${COLORS.BLACK};
	font-size: 24px;
	margin-top: 4px;
`;
