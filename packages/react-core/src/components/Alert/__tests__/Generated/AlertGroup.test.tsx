/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { AlertGroup } from '../../AlertGroup';

it('AlertGroup should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <AlertGroup className={'string'} children={<div>ReactNode</div>} isToast={true} appendTo={undefined} />
  );
  expect(asFragment()).toMatchSnapshot();
});
