/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';

import { KeyTypes } from '../../../helpers';
import { AboutModal, AboutModalProps } from '../AboutModal';

const props: AboutModalProps = {
  onClose: vi.fn(),
  children: 'modal content',
  productName: 'Product Name',
  trademark: 'Trademark and copyright information here',
  brandImageSrc: 'brandImg...',
  brandImageAlt: 'Brand Image'
};

describe('AboutModal', () => {
  test('closes with escape', async () => {
    const user = userEvent.setup();

    render(<AboutModal {...props} isOpen />);

    await user.type(screen.getByRole('dialog'), `{${KeyTypes.Escape}}`);
    expect(props.onClose).toHaveBeenCalled();
  });

  test('does not render the modal when isOpen is not specified', () => {
    render(<AboutModal {...props} />);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  test('Console error is generated when the logoImageSrc is provided without logoImageAlt', () => {
    const noImgAltrops = {
      onClose: vi.fn(),
      children: 'modal content',
      productName: 'Product Name',
      trademark: 'Trademark and copyright information here',
      brandImageSrc: 'brandImg...',
      logoImageSrc: 'logoImg...'
    } as any;
    const myMock = vi.fn() as any;
    global.console = { error: myMock } as any;

    render(<AboutModal {...noImgAltrops}>Test About Modal</AboutModal>);
    expect(myMock).toHaveBeenCalled();
  });

  test('Console error is generated when the logoImageSrc is provided without logoImageAlt', () => {
    const noProductNameProps = {
      onClose: vi.fn(),
      children: 'modal content',
      trademark: 'Trademark and copyright information here'
    } as any;
    const myMock = vi.fn() as any;
    global.console = { error: myMock } as any;

    render(<AboutModal {...noProductNameProps}>Test About Modal</AboutModal>);
    expect(myMock).toHaveBeenCalled();
  });
});
