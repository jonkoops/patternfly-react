/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { MultipleFileUploadTitleIcon } from '../MultipleFileUploadTitleIcon';

describe('MultipleFileUploadTitleIcon', () => {
  test('renders with expected class names', () => {
    const { asFragment } = render(<MultipleFileUploadTitleIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const { asFragment } = render(<MultipleFileUploadTitleIcon className="test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
