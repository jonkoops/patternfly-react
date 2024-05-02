/**
 * @vitest-environment jsdom
 */
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { TooltipArrow } from '../TooltipArrow';

test('Renders without children', () => {
  render(<TooltipArrow data-testid="tooltipArrow" />);

  expect(screen.getByTestId('tooltipArrow')).toBeVisible();
});

test('Renders with class name pf-v5-c-tooltip__arrow by default', () => {
  render(<TooltipArrow data-testid="tooltipArrow" />);

  expect(screen.getByTestId('tooltipArrow')).toHaveClass(styles.tooltipArrow);
});

test('Renders with custom class names provided via prop', () => {
  render(<TooltipArrow className="test-class" data-testid="tooltipArrow" />);

  expect(screen.getByTestId('tooltipArrow')).toHaveClass('test-class');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<TooltipArrow data-testid="tooltipArrow" />);
  expect(asFragment()).toMatchSnapshot();
});
