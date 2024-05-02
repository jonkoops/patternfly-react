/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { AboutModalBoxHeader } from '../AboutModalBoxHeader';

test('AboutModalBoxHeader Test', () => {
  const { asFragment } = render(
    <AboutModalBoxHeader productName="Product Name" id="id">
      This is a AboutModalBox header
    </AboutModalBoxHeader>
  );
  expect(asFragment()).toMatchSnapshot();
});
