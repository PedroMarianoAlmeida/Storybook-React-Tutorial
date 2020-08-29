import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';
import '@storybook/addon-console';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>
      {story()}
    </Box>
  </ThemeProvider>))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}