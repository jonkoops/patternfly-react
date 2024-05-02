/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PageHeaderToolsGroup } from '../PageHeaderToolsGroup';

it('PageHeaderToolsGroup should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <PageHeaderToolsGroup className={'string'}>
      <div>ReactNode</div>
    </PageHeaderToolsGroup>
  );
  expect(asFragment()).toMatchSnapshot();
});
