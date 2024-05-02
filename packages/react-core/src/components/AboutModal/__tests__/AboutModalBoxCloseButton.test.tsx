/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test, vi } from 'vitest';

import { AboutModalBoxCloseButton } from '../AboutModalBoxCloseButton';

test('AboutModalBoxCloseButton Test', () => {
  const { asFragment } = render(<AboutModalBoxCloseButton />);
  expect(asFragment()).toMatchSnapshot();
});

test('AboutModalBoxCloseButton Test onclose', () => {
  const onClose = vi.fn();
  const { asFragment } = render(<AboutModalBoxCloseButton onClose={onClose} />);
  expect(asFragment()).toMatchSnapshot();
});

test('AboutModalBoxCloseButton Test close button aria label', () => {
  const closeButtonAriaLabel = 'Klose Daylok';
  const { asFragment } = render(<AboutModalBoxCloseButton aria-label={closeButtonAriaLabel} />);
  expect(asFragment()).toMatchSnapshot();
});
