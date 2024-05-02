/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { OverflowMenuDropdownItem } from '../../OverflowMenuDropdownItem';

describe('OverflowMenuDropdownItem', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
        <OverflowMenuDropdownItem itemId="id" children={'any'} isShared={false} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
