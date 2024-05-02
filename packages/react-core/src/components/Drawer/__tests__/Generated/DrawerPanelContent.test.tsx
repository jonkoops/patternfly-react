/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it, vi } from 'vitest';

import { DrawerPanelContent } from '../../DrawerPanelContent';

vi.mock('../../../../helpers/GenerateId/GenerateId');

it('DrawerPanelContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<DrawerPanelContent className={"''"} children={<div>ReactNode</div>} />);
  expect(asFragment()).toMatchSnapshot();
});
