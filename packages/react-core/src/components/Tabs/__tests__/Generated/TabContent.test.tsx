/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { TabContent } from '../../TabContent';

it('TabContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <TabContent
      children={'any'}
      child={<p>ReactElement</p>}
      className={'string'}
      activeKey={1}
      eventKey={1}
      innerRef={() => {}}
      id={'string'}
      aria-label={'string'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
