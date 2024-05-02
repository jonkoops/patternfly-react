/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { LoginHeader } from '../../LoginHeader';

it('LoginHeader should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<LoginHeader children={<>ReactNode</>} className={"''"} headerBrand={null} />);
  expect(asFragment()).toMatchSnapshot();
});
