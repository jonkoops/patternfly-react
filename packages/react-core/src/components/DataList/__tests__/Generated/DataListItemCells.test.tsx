/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { DataListItemCells } from '../../DataListItemCells';

it('DataListItemCells should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DataListItemCells className={"''"} dataListCells={<div>ReactNode</div>} rowid={"''"} />
  );
  expect(asFragment()).toMatchSnapshot();
});
