import { oneOfType, arrayOf, string, number, bool } from 'prop-types';
import styled from 'styled-components';

import { generateDefaultStyle, generateMediaQueries } from './utils';

const generateStyle = props => `
  grid-area: ${props.gridArea || ''};
  grid-row-start: ${props.rowStart || ''};
  grid-row-end: ${
    props.rowEnd ? props.rowEnd : props.rowSpan ? `span ${props.rowSpan}` : ''
  };
  grid-column-start: ${props.columnStart || ''};
  grid-column-end: ${
    props.columnEnd
      ? props.columnEnd
      : props.columnSpan
        ? `span ${props.columnSpan}`
        : ''
  };
`;

const GridItem = styled.div`
  ${props => generateDefaultStyle(props, generateStyle)};
  ${props => generateMediaQueries(props, generateStyle)};
`;

GridItem.propTypes = {
  useGridBreakpoints: bool,
  rowStart: oneOfType([number, arrayOf(number)]),
  rowEnd: oneOfType([number, arrayOf(number)]),
  rowSpan: oneOfType([number, arrayOf(number)]),
  columnStart: oneOfType([number, arrayOf(number)]),
  columnEnd: oneOfType([number, arrayOf(number)]),
  columnSpan: oneOfType([number, arrayOf(number)]),
  gridArea: oneOfType([string, arrayOf(string)]),
};

GridItem.defaultProps = {
  useGridBreakpoints: true,
};

export default GridItem;
