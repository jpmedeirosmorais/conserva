import GlobalStyles from '../common/styles/global';

import { MemoryRouter } from 'react-router';

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <GlobalStyles />
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};