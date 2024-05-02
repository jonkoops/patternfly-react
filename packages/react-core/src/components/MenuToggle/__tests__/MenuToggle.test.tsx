/**
 * @vitest-environment jsdom
 */
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';

import { Badge } from '../../Badge';
import { MenuToggle } from '../MenuToggle';
import { MenuToggleCheckbox } from '../MenuToggleCheckbox';

describe('menu toggle', () => {
  test('renders successfully', () => {
    const { asFragment } = render(<MenuToggle>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('passes additional classes', () => {
    const { asFragment } = render(<MenuToggle className="test-class">Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows isExpanded', () => {
    const { asFragment } = render(<MenuToggle isExpanded>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows isDisabled', () => {
    const { asFragment } = render(<MenuToggle isDisabled>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows isPrimary', () => {
    const { asFragment } = render(<MenuToggle variant="primary">Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows isPlain', () => {
    const { asFragment } = render(
      <MenuToggle variant="plain">
        <EllipsisVIcon />
      </MenuToggle>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows plain text', () => {
    const { asFragment } = render(<MenuToggle variant="plainText">Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows icon', () => {
    const { asFragment } = render(<MenuToggle icon={<CogIcon />}>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows badge', () => {
    const { asFragment } = render(<MenuToggle badge={<Badge>badge</Badge>}>Toggle</MenuToggle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('shows success status', () => {
    render(<MenuToggle status="success">Toggle</MenuToggle>);
    expect(screen.getByRole('button')).toHaveClass('pf-m-success');
  });

  test('shows warning status', () => {
    render(<MenuToggle status="warning">Toggle</MenuToggle>);
    expect(screen.getByRole('button')).toHaveClass('pf-m-warning');
  });

  test('shows danger status', () => {
    render(<MenuToggle status="danger">Toggle</MenuToggle>);
    expect(screen.getByRole('button')).toHaveClass('pf-m-danger');
  });

  test('split toggle passes onClick', async () => {
    const mockClick = vi.fn();
    const user = userEvent.setup();

    render(
      <MenuToggle
        onClick={mockClick}
        splitButtonOptions={{
          items: [
            <MenuToggleCheckbox
              id="split-button-checkbox-with-text-disabled-example"
              key="split-checkbox-with-text-disabled"
              aria-label="Select all"
            >
              10 selected
            </MenuToggleCheckbox>
          ]
        }}
        aria-label="Menu toggle with checkbox split button and text"
      />
    );

    await user.click(screen.getByRole(`button`) as Element);
    expect(mockClick).toHaveBeenCalled();
  });
});
