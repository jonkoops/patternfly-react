/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { ProgressContainer } from '../../ProgressContainer';

it('ProgressContainer should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <ProgressContainer
      parentId={'string'}
      title={"''"}
      label={null}
      variant={'danger'}
      measureLocation={'outside'}
      value={42}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
