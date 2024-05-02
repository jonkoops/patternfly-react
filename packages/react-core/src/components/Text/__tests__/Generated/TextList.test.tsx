/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { TextList } from '../../TextList';

it('TextList should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<TextList children={<>ReactNode</>} className={"''"} component={'ul'} />);
  expect(asFragment()).toMatchSnapshot();
});
