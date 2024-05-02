/**
/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { DrawerContent } from '../../DrawerContent';

it('DrawerContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DrawerContent className={"''"} children={<div>ReactNode</div>} panelContent={<div>test</div>} />
  );
  expect(asFragment()).toMatchSnapshot();
});
