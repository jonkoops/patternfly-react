/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { AboutModalBoxBrand } from '../AboutModalBoxBrand';

test('test About Modal Brand', () => {
  const { asFragment } = render(<AboutModalBoxBrand src="testimage.." alt="brand" />);
  expect(asFragment()).toMatchSnapshot();
});
