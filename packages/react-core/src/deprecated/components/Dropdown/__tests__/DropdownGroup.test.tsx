/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { DropdownGroup } from '../DropdownGroup';

describe('dropdown groups', () => {
  test('basic render', () => {
    const { asFragment } = render(<DropdownGroup label="Group 1">Something</DropdownGroup>);
    expect(asFragment()).toMatchSnapshot();
  });
});
