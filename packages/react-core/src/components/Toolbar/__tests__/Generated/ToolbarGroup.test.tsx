/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ToolbarGroup } from '../../ToolbarGroup';

it('ToolbarGroup should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <ToolbarGroup
      className={'string'}
      variant={'filter-group'}
      children={<div>ReactNode</div>}
      innerRef={{ current: document.createElement('div') }}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
