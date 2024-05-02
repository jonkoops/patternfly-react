/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ContextSelectorFooter } from '../ContextSelectorFooter';

test('Renders ContextSelectorFooter', () => {
  const { asFragment } = render(<ContextSelectorFooter>testing text</ContextSelectorFooter>);
  expect(asFragment()).toMatchSnapshot();
});
