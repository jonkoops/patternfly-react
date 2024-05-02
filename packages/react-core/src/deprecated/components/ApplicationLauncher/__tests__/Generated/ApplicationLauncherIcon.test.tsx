/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ApplicationLauncherIcon } from '../../ApplicationLauncherIcon';

it('ApplicationLauncherIcon should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<ApplicationLauncherIcon children={<div>ReactNode</div>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
