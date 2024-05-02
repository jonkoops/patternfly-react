/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';

import { MultipleFileUpload } from '../MultipleFileUpload';

vi.mock('../../../helpers/GenerateId/GenerateId');

describe('MultipleFileUpload', () => {
  test('renders with expected class names when not horizontal', () => {
    const { asFragment } = render(<MultipleFileUpload>Foo</MultipleFileUpload>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with expected class names when horizontal', () => {
    const { asFragment } = render(<MultipleFileUpload isHorizontal>Foo</MultipleFileUpload>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const { asFragment } = render(<MultipleFileUpload className="test">Foo</MultipleFileUpload>);
    expect(asFragment()).toMatchSnapshot();
  });
});
