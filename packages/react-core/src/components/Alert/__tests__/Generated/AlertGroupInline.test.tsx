/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { AlertGroupInline } from '../../AlertGroupInline';

it('AlertGroupInline should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<AlertGroupInline />);
  expect(asFragment()).toMatchSnapshot();
});
