/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Toolbar } from '../Toolbar';
import { ToolbarContent } from '../ToolbarContent';
import { ToolbarToggleGroup } from '../ToolbarToggleGroup';

describe('ToolbarToggleGroup', () => {
  it('should warn on bad props', () => {
    const myMock = vi.fn() as any;
    global.console = { error: myMock } as any;

    const items = (
      <React.Fragment>
        <ToolbarToggleGroup breakpoint={undefined as 'xl'} toggleIcon={null}>
          test
        </ToolbarToggleGroup>
      </React.Fragment>
    );

    render(
      <Toolbar id="toolbar-with-filter" className="pf-m-toggle-group-container" collapseListedFiltersBreakpoint="xl">
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );

    expect(myMock).toHaveBeenCalled();
  });
});
