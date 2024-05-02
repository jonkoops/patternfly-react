/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { DataListCheck } from '../../DataListCheck';

it('DataListCheck should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DataListCheck
      className={"''"}
      isValid={true}
      isDisabled={false}
      isChecked={null}
      checked={null}
      onChange={(event: React.FormEvent<HTMLInputElement>, checked: boolean) => {}}
      aria-labelledby={'string'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
