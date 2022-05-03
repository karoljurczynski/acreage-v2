import styled from "styled-components";
import COLORS from "../../../tools/styles/colors";


export const Wrapper = styled.div`
	display: flex;
	background-color: ${COLORS.LIGHT_GRAY};
	padding: 48px 0;
	height: 100vh;
	width: fit-content;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;
