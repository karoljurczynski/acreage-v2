import styled from 'styled-components';


/**
 * Simple, reusable flex container.
 */


const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction:  ${props => props.direction ? props.direction : 'row'};
    align-items:     ${props => props.align     ? props.align     : 'flex-start'};
    justify-content: ${props => props.justify   ? props.justify   : 'flex-start'};
    flex-wrap:       ${props => props.wrap      ? props.wrap      : 'no-wrap'};
`;


export default FlexWrapper;