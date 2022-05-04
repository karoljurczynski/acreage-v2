import styled from "styled-components";
import COLORS from "../../../tools/styles/colors";

export const TileIcon = styled.img`
	width: 42px;
	height: 42px;
`;

export const Wrapper = styled.div<TileWrapperProps>`
	width: 	${props => props.tileSize}px;
	height: ${props => props.tileSize}px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s ease-in-out;
	border-radius: 5px;
	box-shadow: 1px 1px 5px ${COLORS.DARK_GRAY};
	background-color: ${props => props.color};
	user-select: none;

	${props => props.clickable && `
		cursor: pointer;
	`}
	${TileIcon} {
		width:  ${props => props.iconSize}px;
		height: ${props => props.iconSize}px;
	}
`;
