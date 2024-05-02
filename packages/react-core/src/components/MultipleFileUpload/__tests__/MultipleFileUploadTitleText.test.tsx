/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { MultipleFileUploadTitleText } from '../MultipleFileUploadTitleText';

describe('MultipleFileUploadTitleText', () => {
  test('renders with expected class names', () => {
    const { asFragment } = render(<MultipleFileUploadTitleText>Foo</MultipleFileUploadTitleText>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const { asFragment } = render(<MultipleFileUploadTitleText className="test">Foo</MultipleFileUploadTitleText>);
    expect(asFragment()).toMatchSnapshot();
  });
});
