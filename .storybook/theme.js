import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // Colors
  colorPrimary: '#e63338',
  colorSecondary: '#e63338',

  // UI
  appBg: '#F6FAFC',
  appContentBg: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"PT Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barBg: '#fff',
});