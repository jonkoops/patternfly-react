/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { TabButton } from '../TabButton';

test('should render tab button', () => {
  const { asFragment } = render(<TabButton>Tab button</TabButton>);
  expect(asFragment()).toMatchSnapshot();
});
