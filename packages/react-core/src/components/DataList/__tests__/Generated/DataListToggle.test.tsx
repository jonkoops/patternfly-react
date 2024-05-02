/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { DataListToggle } from '../../DataListToggle';

it('DataListToggle should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DataListToggle
      className={"''"}
      isExpanded={false}
      id={'string'}
      rowid={"''"}
      aria-labelledby={"''"}
      aria-label={"'Details'"}
      aria-controls={"''"}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
