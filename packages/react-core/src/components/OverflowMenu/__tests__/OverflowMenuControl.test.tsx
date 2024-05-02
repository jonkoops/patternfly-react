/**
 * @vitest-environment jsdom
 */
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { OverflowMenuContext } from '../OverflowMenuContext';
import { OverflowMenuControl } from '../OverflowMenuControl';

describe('OverflowMenuControl', () => {
  test('basic', () => {
    render(
      <OverflowMenuContext.Provider value={{ isBelowBreakpoint: true }}>
        <OverflowMenuControl data-testid="test-id" />
      </OverflowMenuContext.Provider>
    );
    expect(screen.getByTestId('test-id')).toHaveClass(styles.overflowMenuControl);
  });

  test('Additional Options', () => {
    const { asFragment } = render(<OverflowMenuControl hasAdditionalOptions />);
    expect(asFragment()).toMatchSnapshot();
  });
});
