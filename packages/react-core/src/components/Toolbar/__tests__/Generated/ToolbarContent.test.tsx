/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ToolbarContent } from '../../ToolbarContent';

it('ToolbarContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <ToolbarContent
      className={'string'}
      children={<div>ReactNode</div>}
      isExpanded={false}
      clearAllFilters={() => undefined as void}
      showClearFiltersButton={false}
      clearFiltersButtonText={'string'}
      toolbarId={'string'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
