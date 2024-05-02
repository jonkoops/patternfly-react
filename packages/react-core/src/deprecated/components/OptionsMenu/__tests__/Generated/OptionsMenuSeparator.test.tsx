/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { OptionsMenuSeparator } from '../../OptionsMenuSeparator';

it('OptionsMenuSeparator should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<OptionsMenuSeparator className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
