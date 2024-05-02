/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ProgressBar } from '../../ProgressBar';

it('ProgressBar should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<ProgressBar children={<>ReactNode</>} className={"''"} value={42} />);
  expect(asFragment()).toMatchSnapshot();
});
