/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { SearchInput } from '../../../../components/SearchInput';
import { DualListSelectorPane } from '../../DualListSelector';

describe('DualListSelector', () => {
  test('basic', () => {
    const { asFragment } = render(<DualListSelectorPane id="basicTest" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with search inputs', () => {
    const { asFragment } = render(<DualListSelectorPane id="searchTest" searchInput={<SearchInput />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with custom status', () => {
    const { asFragment } = render(<DualListSelectorPane id="statusTest" status="Test status1" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('basic with disabled controls', () => {
    const { asFragment } = render(<DualListSelectorPane id="disabledTest" isDisabled />);
    expect(asFragment()).toMatchSnapshot();
  });
});
