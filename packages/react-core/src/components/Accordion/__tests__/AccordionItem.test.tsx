/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { AccordionItem } from '../AccordionItem';

test('Renders children', () => {
  render(<AccordionItem>Test</AccordionItem>);

  expect(screen.getByText('Test')).toBeVisible();
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<AccordionItem>Test</AccordionItem>);
  expect(asFragment()).toMatchSnapshot();
});
