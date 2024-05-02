/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PopoverCloseButton } from '../../PopoverCloseButton';

it('PopoverCloseButton should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<PopoverCloseButton onClose={() => undefined as void} aria-label={'string'} />);
  expect(asFragment()).toMatchSnapshot();
});
