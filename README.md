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

## MySimpleLayout.js

Starting off simple, we'll define a grid with 3 columns, and add 6 items to the grid, specifying how many columns and rows they should span.

```js
import { Grid, GridItem } from 'regridder';

// This is just to add a border for visibility of grid items
const MyGridItem = props => (
  <GridItem style={{ border: '1px solid black' }} {...props} />
);

const MyLayoutComponent = () => (
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

export default MyLayoutComponent;
```

Note that by default, a grid item will span one column and one row.
