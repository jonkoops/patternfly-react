/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { GalleryItem } from '../../GalleryItem';

it('GalleryItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<GalleryItem children={<>ReactNode</>} />);
  expect(asFragment()).toMatchSnapshot();
});
