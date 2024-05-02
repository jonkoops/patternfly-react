/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { TextContent } from '../../TextContent';

it('TextContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<TextContent children={<>ReactNode</>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
