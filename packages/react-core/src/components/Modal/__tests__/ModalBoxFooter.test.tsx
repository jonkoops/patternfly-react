/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ModalBoxFooter } from '../ModalBoxFooter';

test('ModalBoxFooter Test', () => {
  const { asFragment } = render(
    <ModalBoxFooter className="test-box-footer-class">This is a ModalBox Footer</ModalBoxFooter>
  );
  expect(asFragment()).toMatchSnapshot();
});
