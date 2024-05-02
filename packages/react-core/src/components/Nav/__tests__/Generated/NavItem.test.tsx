/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { NavItem } from '../../NavItem';

it('NavItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <NavItem
      children={<>ReactNode</>}
      className={"''"}
      to={"''"}
      isActive={false}
      groupId={null}
      itemId={null}
      preventDefault={false}
      onClick={null}
      component={'a'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
