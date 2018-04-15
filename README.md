# regridder

Simple React js grid layout system.

# Overview

Regridder allows developers to easily (and [simply](https://www.infoq.com/presentations/Simple-Made-Easy)) create flexible and responsive grid layouts within their React js applications. Regridder makes use of the excellent [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) feature, and uses the same syntaxes for prop values. Regridder also uses [styled-components](https://github.com/styled-components/styled-components) to apply media queries for responsiveness.

# Installation

`npm i regridder`

or

`yarn add regridder`

Refer to the docs for your version of npm or yarn if you encounter issues installing this package.

# Example

## SimpleLayout.js

Starting off simple, we'll define a grid with 3 columns and add 6 items to the grid, specifying how many rows and columns some of the items should span, while keeping defaults for others.

```js
import { Grid, GridItem } from 'regridder';

// This is just to add a border for visibility of grid items
const MyGridItem = props => (
  <GridItem style={{ border: '1px solid black' }} {...props} />
);

const SimpleLayout = () => (
  <div style={{ textAlign: 'center' }}>
    <Grid numColumns={3} rowHeight="2em" gridGap="1em">
      <MyGridItem columnSpan={2}>Item 1</MyGridItem>
      <MyGridItem>Item 2</MyGridItem>
      <MyGridItem rowSpan={2}>Item 3</MyGridItem>
      <MyGridItem rowSpan={3} columnSpan={2}>
        Item 4
      </MyGridItem>
      <MyGridItem>Item 5</MyGridItem>
      <MyGridItem columnSpan={3}>Item 6</MyGridItem>
    </Grid>
  </div>
);

export default SimpleLayout;
```

Note that by default, a grid item will span one column and one row.

## ResponsiveLayout.js

Creating a layout that is responsive to the screen width of a user's device can be achieved by simply providing an array of breakpoints to the Grid component, and appropriate arrays for relevant props in the Grid and/or GridItem components. In the following example, we specify that our breakpoints are 500px and 700px, and then we specify that the number of columns, the row height and the width/height of various grid items should vary respective to our breakpoints.

```js
import { Grid, GridItem } from 'regridder';

// This is just to add a border for visibility of grid items
const MyGridItem = props => (
  <GridItem style={{ border: '1px solid black' }} {...props} />
);

const breakpoints = ['500px', '700px'];

const ResponsiveLayout = () => (
  <div style={{ textAlign: 'center' }}>
    <Grid
      numColumns={[2, 3]}
      rowHeight={['2em', '3em']}
      gridGap="1em"
      breakpoints={breakpoints}
    >
      <MyGridItem columnSpan={2}>Item 1</MyGridItem>
      <MyGridItem rowSpan={[2, 1]}>Item 2</MyGridItem>
      <MyGridItem rowSpan={2}>Item 3</MyGridItem>
      <MyGridItem rowSpan={3} columnSpan={2}>
        Item 4
      </MyGridItem>
      <MyGridItem columnSpan={[2, 1]}>Item 5</MyGridItem>
      <MyGridItem columnSpan={[2, 3]}>Item 6</MyGridItem>
    </Grid>
  </div>
);

export default ResponsiveLayout;
```

Note that your breakpoints can use whatever unit of measurement you'd prefer, and any screen width less than your smallest breakpoint will use the same prop values as your smallest breakpoint does. Also note that if you provide a single value for a prop, that value will be used for at all breakpoints.
