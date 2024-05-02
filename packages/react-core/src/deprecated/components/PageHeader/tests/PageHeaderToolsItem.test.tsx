/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PageHeaderToolsItem } from '../PageHeaderToolsItem';

it('PageHeaderToolsItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <PageHeaderToolsItem className={'string'} isSelected={true}>
      children={<div>ReactNode</div>}
    </PageHeaderToolsItem>
  );
  expect(asFragment()).toMatchSnapshot();
});
