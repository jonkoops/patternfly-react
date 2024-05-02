/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { SimpleListItem } from '../../SimpleListItem';

it('SimpleListItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <SimpleListItem
      children={<>ReactNode</>}
      className={"''"}
      component={'button'}
      componentClassName={"''"}
      componentProps={'any'}
      isActive={false}
      onClick={() => {}}
      type={'button'}
      href={"''"}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
