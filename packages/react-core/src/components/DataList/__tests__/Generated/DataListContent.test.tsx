/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { DataListContent } from '../../DataListContent';

it('DataListContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DataListContent
      children={<>ReactNode</>}
      className={"''"}
      id={"''"}
      rowid={"''"}
      isHidden={false}
      hasNoPadding={false}
      aria-label={'string'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
