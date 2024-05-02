/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { SplitItem } from '../../SplitItem';

it('SplitItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<SplitItem isFilled={false} children={<>ReactNode</>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
