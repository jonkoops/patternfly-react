/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PageSidebar } from '../../PageSidebar';

it('PageSidebar should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <PageSidebar className={"''"} isManagedSidebar={true} isSidebarOpen={true} theme={'dark'}>
      <div>ReactNode</div>
    </PageSidebar>
  );
  expect(asFragment()).toMatchSnapshot();
});
