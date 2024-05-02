/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { NavGroup } from '../../NavGroup';

it('NavGroup should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<NavGroup title={'string'} children={<>ReactNode</>} className={"''"} id={'string'} />);
  expect(asFragment()).toMatchSnapshot();
});
