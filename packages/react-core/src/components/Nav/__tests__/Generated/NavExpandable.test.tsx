/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { NavExpandable } from '../../NavExpandable';

it('NavExpandable should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <NavExpandable
      title={'string'}
      srText={"''"}
      isExpanded={false}
      children={''}
      className={"''"}
      groupId={null}
      isActive={false}
      id={"''"}
      onExpand={() => undefined}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
