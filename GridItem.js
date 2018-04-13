import styled from 'styled-components';
import { generateDefaultStyle, generateMediaQueries } from './utils';

const GridItem = styled.div`
  ${props => generateDefaultStyle(props, generateStyle)};
  ${props => generateMediaQueries(props, generateStyle)};
`;

const generateStyle = props => `
  grid-area: ${props.gridArea || ''};
`;

export default GridItem;
