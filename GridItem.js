import React from "react";
import { oneOfType, arrayOf, string, number } from "prop-types";
import styled from "styled-components";

import { generateDefaultStyle, generateMediaQueries } from "./utils";

const generateStyle = props => `
  grid-area: ${props.gridArea || ""};
  grid-row-start: ${props.rowStart || ""};
  grid-row-end: ${
    props.rowEnd ? props.rowEnd : props.rowSpan ? `span ${props.rowSpan}` : ""
  };
  grid-column-start: ${props.columnStart || ""};
  grid-column-end: ${
    props.columnEnd
      ? props.columnEnd
      : props.columnSpan
        ? `span ${props.columnSpan}`
        : ""
  };
`;

const GridItemWrapper = styled.div`
  ${props => generateDefaultStyle(props, generateStyle)};
  ${props => generateMediaQueries(props, generateStyle)};
`;

class GridItem extends React.Component {
  static propTypes = {
    rowStart: oneOfType([number, arrayOf(number)]),
    rowEnd: oneOfType([number, arrayOf(number)]),
    rowSpan: oneOfType([number, arrayOf(number)]),
    columnStart: oneOfType([number, arrayOf(number)]),
    columnEnd: oneOfType([number, arrayOf(number)]),
    columnSpan: oneOfType([number, arrayOf(number)]),
    gridArea: oneOfType([string, arrayOf(string)])
  };

  static contextTypes = {
    breakpoints: arrayOf(string)
  };

  render() {
    return (
      <GridItemWrapper breakpoints={this.context.breakpoints} {...this.props} />
    );
  }
}

export default GridItem;
