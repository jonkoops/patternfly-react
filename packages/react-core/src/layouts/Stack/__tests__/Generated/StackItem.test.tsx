/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { StackItem } from '../../StackItem';

it('StackItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<StackItem isFilled={false} children={<>ReactNode</>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
