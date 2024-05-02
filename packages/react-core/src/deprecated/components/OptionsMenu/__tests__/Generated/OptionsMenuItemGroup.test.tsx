/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { OptionsMenuItemGroup } from '../../OptionsMenuItemGroup';

it('OptionsMenuItemGroup should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <OptionsMenuItemGroup
      children={<>ReactNode</>}
      className={"''"}
      aria-label={"''"}
      groupTitle={''}
      hasSeparator={false}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
