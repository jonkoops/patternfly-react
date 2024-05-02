/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { ToolbarGroup } from '../ToolbarGroup';

describe('ToolbarItem', () => {
  it('should render with pf-m-overflow-container when isOverflowContainer is set', () => {
    render(
      <ToolbarGroup data-testid="toolbargroup" isOverflowContainer>
        Test
      </ToolbarGroup>
    );
    expect(screen.getByTestId('toolbargroup')).toHaveClass('pf-m-overflow-container');
  });
});
