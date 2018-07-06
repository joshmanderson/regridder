const getPropAtIndex = (index, prop) => {
  return Array.isArray(prop) ? prop[Math.min(index, prop.length - 1)] : prop;
};

const getPropsAtIndex = (index, props) =>
  Object.keys(props).reduce((propsAtIndex, propKey) => {
    const propValue = props[propKey];

    propsAtIndex[propKey] = getPropAtIndex(index, propValue);

    return propsAtIndex;
  }, {});

const generateMediaQuery = (
  breakpoint,
  propsIndex,
  props,
  generateStyle
) => `@media only screen and (min-width: ${breakpoint}) {
      ${generateStyle(getPropsAtIndex(propsIndex, props))}
    }`;

const generateMediaQueries = (props, generateStyle) =>
  Array.isArray(props.breakpoints) && props.breakpoints.length > 0
    ? props.breakpoints
        .map((breakpoint, index) =>
          generateMediaQuery(breakpoint, index + 1, props, generateStyle)
        )
        .join(" ")
    : "";

const generateDefaultStyle = (props, generateStyle) =>
  generateStyle(getPropsAtIndex(0, props));

export { generateDefaultStyle, generateMediaQueries };
