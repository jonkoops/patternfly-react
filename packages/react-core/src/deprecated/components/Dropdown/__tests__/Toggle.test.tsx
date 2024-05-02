/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { DropdownToggle } from '../DropdownToggle';
import { KebabToggle } from '../KebabToggle';

test('Dropdown toggle', () => {
  const { asFragment } = render(<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>);
  expect(asFragment()).toMatchSnapshot();
});
test('Kebab toggle', () => {
  const { asFragment } = render(<KebabToggle id="Dropdown Toggle" />);
  expect(asFragment()).toMatchSnapshot();
});
