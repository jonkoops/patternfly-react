/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { LevelItem } from '../../LevelItem';

it('LevelItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<LevelItem children={<>ReactNode</>} />);
  expect(asFragment()).toMatchSnapshot();
});
