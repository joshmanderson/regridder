import styled from 'styled-components';
import { generateDefaultStyle, generateMediaQueries } from './utils';

const GridItem = styled.div`
  ${props => generateDefaultStyle(props, generateStyle)};
  ${props => generateMediaQueries(props, generateStyle)};
`;

const generateStyle = props => `
  grid-area: ${props.gridArea || ''};
  grid-column-start: ${props.columnStart || ''};
  grid-row-start: ${props.rowStart || ''};
  grid-column-end: ${
    props.columnEnd ? props.columnEnd : `span ${props.columnSpan || ''}`
  };
  grid-row-end: ${props.rowEnd ? props.rowEnd : `span ${props.rowSpan || ''}`};
`;

export default GridItem;
