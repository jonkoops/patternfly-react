/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { FlexItem } from '../../FlexItem';

it('FlexItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<FlexItem children={<>ReactNode</>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
