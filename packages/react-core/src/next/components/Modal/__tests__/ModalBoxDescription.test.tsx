/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ModalBoxDescription } from '../ModalBoxDescription';

test('ModalBoxDescription Test', () => {
  const { asFragment } = render(<ModalBoxDescription>This is a ModalBox Description</ModalBoxDescription>);
  expect(asFragment()).toMatchSnapshot();
});
