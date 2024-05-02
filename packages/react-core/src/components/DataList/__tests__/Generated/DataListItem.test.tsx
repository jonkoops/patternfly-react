/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { DataListItem } from '../../DataListItem';

it('DataListItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DataListItem
      isExpanded={false}
      children={<div>ReactNode</div>}
      className={"''"}
      aria-labelledby={'string'}
      id={"''"}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
