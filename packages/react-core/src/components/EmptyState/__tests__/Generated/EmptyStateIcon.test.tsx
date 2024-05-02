/**
 * @vitest-environment jsdom
 */
import { UserIcon } from '@patternfly/react-icons';
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { Spinner } from '../../../Spinner/Spinner';
import { EmptyStateIcon } from '../../EmptyStateIcon';

it('EmptyStateIcon should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <EmptyStateIcon
      color={'string'}
      title={'string'}
      className={"''"}
      icon={UserIcon}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it('EmptyStateIcon should match snapshot for variant container', () => {
  const { asFragment } = render(
    <EmptyStateIcon
      color={'string'}
      title={'string'}
      className={"''"}
      icon={Spinner}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
