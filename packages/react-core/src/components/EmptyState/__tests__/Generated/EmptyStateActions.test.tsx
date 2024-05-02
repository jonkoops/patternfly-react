/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { EmptyStateActions } from '../../EmptyStateActions';

it('EmptyStateActions should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<EmptyStateActions children={<>ReactNode</>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
