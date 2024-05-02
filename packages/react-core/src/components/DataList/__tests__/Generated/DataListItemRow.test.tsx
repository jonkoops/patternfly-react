/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { DataListItemRow } from '../../DataListItemRow';

it('DataListItemRow should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<DataListItemRow children={<div>ReactNode</div>} className={"''"} rowid={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
