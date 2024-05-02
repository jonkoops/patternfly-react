/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { WizardNavItem } from '../../WizardNavItem';

it('WizardNavItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <WizardNavItem
      children={<>ReactNode</>}
      content={''}
      isCurrent={false}
      isDisabled={false}
      step={42}
      onNavItemClick={() => undefined}
      navItemComponent={'button'}
      href={'null'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
