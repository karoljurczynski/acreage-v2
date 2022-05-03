import styled from "styled-components";
import COLORS from "../../../tools/styles/colors";
import Text from "../../atoms/Text/Text.styles";


export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: fit-content;
	margin-bottom: 96px;
`;

export const LogoBackground = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 96px;
	height: 96px;
	background-color: #FFB029;
	border-radius: 50%;
`;

export const LogoImage = styled.img`
	width: 48px;
	height: 48px;
`;

export const Title = styled(Text)`
	color: ${COLORS.BLACK};
	font-size: 24px;
	margin-top: 4px;
`;