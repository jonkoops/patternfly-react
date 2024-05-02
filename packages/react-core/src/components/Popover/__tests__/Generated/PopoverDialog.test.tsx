/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PopoverDialog } from '../../PopoverDialog';

it('PopoverDialog should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<PopoverDialog position={'top'} className={'null'} children={<>ReactNode</>} />);
  expect(asFragment()).toMatchSnapshot();
});
