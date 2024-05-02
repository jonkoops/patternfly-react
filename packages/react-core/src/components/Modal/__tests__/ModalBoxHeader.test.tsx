/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ModalBoxHeader } from '../ModalBoxHeader';

test('ModalBoxHeader Test', () => {
  const { asFragment } = render(<ModalBoxHeader>This is a ModalBox header</ModalBoxHeader>);
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxHeader help renders', () => {
  const { asFragment } = render(<ModalBoxHeader help={<div>test</div>}>This is a ModalBox header</ModalBoxHeader>);
  expect(asFragment()).toMatchSnapshot();
});
