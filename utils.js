const getPropAtBreakpoint = (breakpointIndex, prop) => {
  return Array.isArray(prop) ? prop[breakpointIndex] : prop;
};

const getPropsAtBreakpoint = (breakpointIndex, props) =>
  Object.keys(props).reduce((breakpointProps, propKey) => {
    const propValue = props[propKey];

    breakpointProps[propKey] = getPropAtBreakpoint(breakpointIndex, propValue);

    return breakpointProps;
  }, {});

const generateMediaQuery = (
  breakpoint,
  breakpointIndex,
  props,
  generateStyle
) => `@media only screen and (min-width: ${breakpoint}px) {
      ${generateStyle(getPropsAtBreakpoint(breakpointIndex, props))}
    }`;

const generateMediaQueries = (props, generateStyle) =>
  Array.isArray(props.breakpoints) && props.breakpoints.length > 0
    ? props.breakpoints
        .map((breakpoint, index) =>
          generateMediaQuery(breakpoint, index, props, generateStyle)
        )
        .join(' ')
    : '';

const generateDefaultStyle = (props, generateStyle) =>
  generateStyle(getPropsAtBreakpoint(0, props));

export { generateDefaultStyle, generateMediaQueries };
