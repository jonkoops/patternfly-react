/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { MultipleFileUploadTitleTextSeparator } from '../MultipleFileUploadTitleTextSeparator';

describe('MultipleFileUploadTitleTextSeparator', () => {
  test('renders with expected class names', () => {
    const { asFragment } = render(<MultipleFileUploadTitleTextSeparator>Foo</MultipleFileUploadTitleTextSeparator>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const { asFragment } = render(
      <MultipleFileUploadTitleTextSeparator className="test">Foo</MultipleFileUploadTitleTextSeparator>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
