/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { expect, test, vi } from 'vitest';

import { ContextSelectorItem } from '../ContextSelectorItem';

test('Renders ContextSelectorItem', () => {
  const { asFragment } = render(
    <ContextSelectorItem sendRef={vi.fn()} index={0}>
      My Project
    </ContextSelectorItem>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Renders ContextSelectorItem disabled and hovered', () => {
  const { asFragment } = render(
    <ContextSelectorItem isDisabled sendRef={vi.fn()} index={0}>
      My Project
    </ContextSelectorItem>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Verify onClick is called ', async () => {
  const mockfn = vi.fn();
  const user = userEvent.setup();

  render(
    <ContextSelectorItem onClick={mockfn} sendRef={vi.fn()} index={0}>
      My Project
    </ContextSelectorItem>
  );
  await user.click(screen.getByRole('button'));

  expect(mockfn.mock.calls).toHaveLength(1);
});
