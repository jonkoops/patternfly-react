/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { SimpleListGroup } from '../../SimpleListGroup';

it('SimpleListGroup should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <SimpleListGroup children={<>ReactNode</>} className={"''"} titleClassName={"''"} title={''} id={"''"} />
  );
  expect(asFragment()).toMatchSnapshot();
});
