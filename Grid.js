import React from 'react';
import { oneOfType, arrayOf, string, number } from 'prop-types';
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
  align-items: ${props.alignItems || ''};
  justify-items: ${props.justifyItems || ''};
  grid-gap: ${props.gridGap || ''};
  grid-auto-rows: ${props.rowHeight || ''};
  grid-template-rows: ${generateGridTemplateColumnsOrRows({
    num: props.numRows,
    dimension: props.rowHeight,
    fixed: props.fixedRows,
  }) || ''};
  grid-auto-columns: ${props.columnWidth || ''};
  grid-template-columns: ${generateGridTemplateColumnsOrRows({
    num: props.numColumns,
    dimension: props.columnWidth,
    fixed: props.fixedColumns,
  }) || ''};
`;

const GridWrapper = styled.div`
  ${props => generateDefaultStyle(props, generateStyle)};
  ${props => generateMediaQueries(props, generateStyle)};
`;

class Grid extends React.Component {
  static propTypes = {
    breakpoints: arrayOf(string),
    alignItems: oneOfType([string, arrayOf(string)]),
    justifyItems: oneOfType([string, arrayOf(string)]),
    gridGap: oneOfType([string, arrayOf(string)]),
    numRows: oneOfType([number, arrayOf(number)]),
    rowHeight: oneOfType([string, arrayOf(string)]),
    fixedRows: oneOfType([string, arrayOf(string)]),
    numColumns: oneOfType([number, arrayOf(number)]),
    columnWidth: oneOfType([string, arrayOf(string)]),
    fixedColumns: oneOfType([string, arrayOf(string)]),
  };

  static defaultProps = {
    breakpoints: ['40em', '52em', '64em'],
  };

  static childContextTypes = {
    breakpoints: arrayOf(string),
  };

  getChildContext() {
    return {
      breakpoints: this.props.breakpoints,
    };
  }

  render() {
    return <GridWrapper {...this.props} />;
  }
}

export default Grid;
