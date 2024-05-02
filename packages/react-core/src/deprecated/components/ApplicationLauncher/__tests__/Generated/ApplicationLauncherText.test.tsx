/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ApplicationLauncherText } from '../../ApplicationLauncherText';

it('ApplicationLauncherText should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<ApplicationLauncherText children={<div>ReactNode</div>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
