/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { AlertActionLink } from '../../AlertActionLink';

it('AlertActionLink should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<AlertActionLink children={'string'} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
