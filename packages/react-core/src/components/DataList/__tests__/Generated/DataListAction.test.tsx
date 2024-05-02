/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { DataListAction } from '../../DataListAction';

it('DataListAction should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DataListAction
      children={<div>ReactNode</div>}
      className={"''"}
      id={'string'}
      aria-labelledby={'string'}
      aria-label={'string'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
