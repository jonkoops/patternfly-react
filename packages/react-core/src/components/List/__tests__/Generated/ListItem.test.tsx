/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ListItem } from '../../ListItem';

it('ListItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<ListItem children={<>ReactNode</>} />);
  expect(asFragment()).toMatchSnapshot();
});
