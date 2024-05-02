/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { LoginFooter } from '../../LoginFooter';

it('LoginFooter should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<LoginFooter children={<>ReactNode</>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
