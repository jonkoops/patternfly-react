/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ApplicationLauncherGroup } from '../../ApplicationLauncherGroup';

it('ApplicationLauncherGroup should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<ApplicationLauncherGroup />);
  expect(asFragment()).toMatchSnapshot();
});
