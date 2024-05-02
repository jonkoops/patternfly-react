/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PopoverArrow } from '../../PopoverArrow';

it('PopoverArrow should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<PopoverArrow className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
