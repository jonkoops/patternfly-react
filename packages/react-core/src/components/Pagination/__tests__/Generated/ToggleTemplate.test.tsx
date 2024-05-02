/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ToggleTemplate } from '../../ToggleTemplate';

it('ToggleTemplate should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<ToggleTemplate firstIndex={0} lastIndex={0} itemCount={0} itemsTitle={"'items'"} />);
  expect(asFragment()).toMatchSnapshot();
});
