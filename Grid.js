import React from 'react';
import styled from 'styled-components';
import { generateDefaultStyle, generateMediaQueries } from './utils';

const generateGridTemplateColumnsOrRows = props => {
  const { num, dimension, fixed } = props;

  if (num) {
    return `repeat(${num}, ${dimension || '1fr'})`;
  } else if (fixed) {
    return fixed;
  } else {
    return '';
  }
};

const generateStyle = props => `
  display: grid;
  align-items: ${props.alignItems};
  justify-items: ${props.justifyItems};
  grid-gap: ${props.gridGap};
  grid-template-columns: ${props =>
    generateGridTemplateColumnsOrRows({
      num: props.numColumns,
      width: props.columnWidth,
      fixed: props.fixedColumns,
    })};
  grid-template-rows: ${props =>
    generateGridTemplateColumnsOrRows({
      num: props.numRows,
      width: props.rowHeight,
      fixed: props.fixedRows,
    })};
  grid-auto-columns: ${props.columnWidth};
  grid-auto-rows: ${props.rowHeight};
`;

const GridWrapper = styled.div`
  ${props => generateDefaultStyle(props, generateStyle)};
  ${props => generateMediaQueries(props, generateStyle)};
`;

const childrenWithBreakpoints = props => {
  const { children, breakpoints } = props;

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      breakpoints,
    })
  );
};

const Grid = props =>
  React.createElement(
    GridWrapper,
    Object.assign({}, props, { children: childrenWithBreakpoints(props) })
  );

export default Grid;
