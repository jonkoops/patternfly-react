/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { FocusTrap } from '../../FocusTrap';

it('FocusTrap should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <FocusTrap
      children={<div>ReactNode</div>}
      className={'string'}
      active={false}
      paused={false}
      focusTrapOptions={undefined}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
