/**
/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ToolbarChipGroupContent } from '../../ToolbarChipGroupContent';

it('ToolbarChipGroupContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <ToolbarChipGroupContent
      className={'string'}
      isExpanded={true}
      chipGroupContentRef={{ current: document.createElement('div') }}
      clearAllFilters={() => undefined as void}
      showClearFiltersButton={true}
      clearFiltersButtonText={"'Clear all filters'"}
      numberOfFilters={42}
      collapseListedFiltersBreakpoint={'lg'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
