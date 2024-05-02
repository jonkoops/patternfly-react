/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ToolbarExpandableContent } from '../../ToolbarExpandableContent';

it('ToolbarExpandableContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <ToolbarExpandableContent
      className={'string'}
      isExpanded={false}
      expandableContentRef={{ current: document.createElement('div') }}
      chipContainerRef={{ current: document.createElement('div') }}
      clearAllFilters={() => undefined as void}
      clearFiltersButtonText={"'Clear all filters'"}
      showClearFiltersButton={true}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
