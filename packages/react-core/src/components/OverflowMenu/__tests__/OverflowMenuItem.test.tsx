/**
 * @vitest-environment jsdom
 */
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { OverflowMenuContext } from '../OverflowMenuContext';
import { OverflowMenuItem } from '../OverflowMenuItem';

describe('OverflowMenuItem', () => {
  test('isPersistent and below breakpoint should still show', () => {
    render(
      <OverflowMenuContext.Provider value={{ isBelowBreakpoint: false }}>
        <OverflowMenuItem isPersistent>Some item value</OverflowMenuItem>
      </OverflowMenuContext.Provider>
    );
    expect(screen.getByText('Some item value')).toHaveClass(styles.overflowMenuItem);
  });

  test('Below breakpoint and not isPersistent should not show', () => {
    const { asFragment } = render(
      <OverflowMenuContext.Provider value={{ isBelowBreakpoint: false }}>
        <OverflowMenuItem>Some item value</OverflowMenuItem>
      </OverflowMenuContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
