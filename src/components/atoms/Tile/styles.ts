import styled from "styled-components";
import COLORS from "../../../tools/styles/colors";

export const Wrapper = styled.div<TileWrapperProps>`
	width: 72px;
	height: 72px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s ease-in;
	border-radius: 5px;
	box-shadow: 1px 1px 5px ${COLORS.DARK_GRAY};
	background-color: ${props => props.color};

	${props => props.clickable && `
		cursor: pointer;
	`}
`;
export const TileIcon = styled.img`
	width: 48px;
	height: 48px;
`;
