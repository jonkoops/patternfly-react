/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ApplicationLauncherContent } from '../../ApplicationLauncherContent';

it('ApplicationLauncherContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<ApplicationLauncherContent children={<div>ReactNode</div>} />);
  expect(asFragment()).toMatchSnapshot();
});
