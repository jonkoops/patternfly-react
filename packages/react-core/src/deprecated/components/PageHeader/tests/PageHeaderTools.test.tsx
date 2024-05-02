/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PageHeaderTools } from '../PageHeaderTools';

it('PageHeaderTools should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <PageHeaderTools className={'string'}>
      <div>ReactNode</div>
    </PageHeaderTools>
  );
  expect(asFragment()).toMatchSnapshot();
});
