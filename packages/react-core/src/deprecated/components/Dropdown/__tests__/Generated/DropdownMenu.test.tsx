/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { DropdownMenu } from '../../DropdownMenu';

it('DropdownMenu should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DropdownMenu
      children={<div>ReactNode</div>}
      className={"''"}
      isOpen={true}
      autoFocus={true}
      component={'ul'}
      position={'right'}
      isGrouped={false}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
