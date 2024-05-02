/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ModalBoxBody } from '../ModalBoxBody';

test('ModalBoxBody Test', () => {
  const { asFragment } = render(
    <ModalBoxBody id="id" className="test-box-class">
      This is a ModalBox header
    </ModalBoxBody>
  );
  expect(asFragment()).toMatchSnapshot();
});
