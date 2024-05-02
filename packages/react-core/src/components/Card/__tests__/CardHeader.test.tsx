/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';

import { CardHeader } from '../CardHeader';

describe('CardHeader', () => {
  test('onExpand adds the toggle button', () => {
    const { asFragment } = render(<CardHeader onExpand={vi.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('actions are rendered', () => {
    const { asFragment } = render(<CardHeader actions="test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
