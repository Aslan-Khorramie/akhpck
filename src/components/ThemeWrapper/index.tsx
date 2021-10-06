import React, { ReactNode } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';

export type Direction = 'ltr' | 'rtl';

export interface ThemeWrapperProps {
  parentDirection: Direction;
  children: ReactNode;
}

function ThemeWrapper({
  parentDirection,
  children,
}: ThemeWrapperProps): JSX.Element {
  // Configure JS
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  // global theme setting for material ui with material ui default theme settings
  // to see full list of settings options visit: https://v4.mui.com/customization/default-theme/
  const theme = createTheme({
    direction: parentDirection,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StylesProvider jss={jss}>
        <Grid container style={{ direction: theme.direction }}>
          {children}
        </Grid>
      </StylesProvider>
    </ThemeProvider>
  );
}

export { ThemeWrapper };
