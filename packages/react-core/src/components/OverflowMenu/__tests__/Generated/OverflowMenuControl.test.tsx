/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { OverflowMenuControl } from '../../OverflowMenuControl';

it('OverflowMenuControl should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <OverflowMenuControl children={'any'} className={'string'} hasAdditionalOptions={true} />
  );
  expect(asFragment()).toMatchSnapshot();
});
