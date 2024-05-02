/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { AlertIcon } from '../../AlertIcon';

it('AlertIcon should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<AlertIcon variant={'success'} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
