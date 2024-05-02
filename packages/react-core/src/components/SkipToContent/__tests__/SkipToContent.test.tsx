/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { SkipToContent } from '../SkipToContent';

const props = {};

test('Verify Skip To Content', () => {
  const { asFragment } = render(<SkipToContent href="#main-content" {...props} />);
  // Add a useful assertion here.
  expect(asFragment()).toMatchSnapshot();
});
