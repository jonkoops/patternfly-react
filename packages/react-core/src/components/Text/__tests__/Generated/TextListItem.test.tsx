/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { TextListItem } from '../../TextListItem';

it('TextListItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<TextListItem children={<>ReactNode</>} className={"''"} component={'li'} />);
  expect(asFragment()).toMatchSnapshot();
});
