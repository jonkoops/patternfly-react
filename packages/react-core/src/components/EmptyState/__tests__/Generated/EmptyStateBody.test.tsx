/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { EmptyStateBody } from '../../EmptyStateBody';

it('EmptyStateBody should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<EmptyStateBody children={<div>ReactNode</div>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
