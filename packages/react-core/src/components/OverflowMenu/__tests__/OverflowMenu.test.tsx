/**
 * @vitest-environment jsdom
 */
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';

import * as getResizeObserver from '../../../helpers/resizeObserver';
import { OverflowMenu } from '../OverflowMenu';

describe('OverflowMenu', () => {
  test('md', () => {
    render(<OverflowMenu breakpoint="md" data-testid="test-id" />);
    expect(screen.getByTestId('test-id')).toHaveClass(styles.overflowMenu);
  });

  test('lg', () => {
    const { asFragment } = render(<OverflowMenu breakpoint="lg" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('xl', () => {
    const { asFragment } = render(<OverflowMenu breakpoint="xl" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('basic', () => {
    const { asFragment } = render(
      <OverflowMenu breakpoint="md">
        <div>BASIC</div>
      </OverflowMenu>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should warn on bad props', () => {
    const myMock = vi.fn() as any;
    global.console = { error: myMock } as any;

    render(
      <OverflowMenu breakpoint={undefined as 'md'}>
        <div>BASIC</div>
      </OverflowMenu>
    );

    expect(myMock).toHaveBeenCalled();
  });

  test('should call resizeObserver on undefined containerRefElement', () => {
    const resizeObserver = vi.spyOn(getResizeObserver, 'getResizeObserver');

    render(<OverflowMenu breakpoint={'md'} />);

    expect(resizeObserver).toHaveBeenCalledWith(undefined, expect.any(Function));
  });

  test('should call resizeObserver on selector ref containerRefElement', () => {
    const resizeObserver = vi.spyOn(getResizeObserver, 'getResizeObserver');

    render(
      <div id="selector-ref-test">
        <OverflowMenu breakpointReference={() => document.getElementById('selector-ref-test')} breakpoint={'md'}>
          <div>Selector ref test</div>
        </OverflowMenu>
      </div>
    );

    const containerRef = screen.getByText('Selector ref test').parentElement?.parentElement;

    expect(resizeObserver).toHaveBeenCalledWith(containerRef, expect.any(Function));
  });

  test('should call resizeObserver on React ref containerRefElement', () => {
    const resizeObserver = vi.spyOn(getResizeObserver, 'getResizeObserver');
    const containerRef = React.createRef<HTMLDivElement>();

    render(
      <div ref={containerRef}>
        <OverflowMenu breakpointReference={containerRef} breakpoint={'md'} />
      </div>
    );

    expect(resizeObserver).toHaveBeenCalledWith(containerRef.current, expect.any(Function));
  });
});
