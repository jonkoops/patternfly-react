/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { AboutModalBox } from '../AboutModalBox';

test('AboutModalBox Test', () => {
  const { asFragment } = render(<AboutModalBox aria-labelledby="id">This is a AboutModalBox</AboutModalBox>);
  expect(asFragment()).toMatchSnapshot();
});
