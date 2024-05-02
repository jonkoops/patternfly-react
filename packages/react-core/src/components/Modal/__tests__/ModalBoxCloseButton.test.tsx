/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';

import { ModalBoxCloseButton } from '../ModalBoxCloseButton';

describe('ModalBoxCloseButton', () => {
  test('onClose called when clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    render(<ModalBoxCloseButton className="test-box-close-button-class" onClose={onClose} />);

    await user.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
