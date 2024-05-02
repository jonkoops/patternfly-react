/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { DataListCell } from '../../DataListCell';

it('DataListCell should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <DataListCell
      children={<>ReactNode</>}
      className={"''"}
      width={1}
      isFilled={true}
      alignRight={false}
      isIcon={false}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
