/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { AboutModalBoxContent } from '../AboutModalBoxContent';

test('AboutModalBoxContent Test', () => {
  const { asFragment } = render(
    <AboutModalBoxContent trademark="trademark" id="id">
      This is a AboutModalBoxContent
    </AboutModalBoxContent>
  );
  expect(asFragment()).toMatchSnapshot();
});
