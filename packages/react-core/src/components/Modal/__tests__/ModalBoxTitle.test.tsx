/**
 * @vitest-environment jsdom
 */
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ModalBoxTitle } from '../ModalBoxTitle';

test('ModalBoxTitle alert variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box warning" id="boxId" titleIconVariant="warning">
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle info variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box info" id="boxId" titleIconVariant="info">
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle danger variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box danger" id="boxId" titleIconVariant="danger">
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle custom variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box warning" id="boxId" titleIconVariant="custom">
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle success variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box success" id="boxId" titleIconVariant="success">
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('ModalBoxTitle custom icon variant', () => {
  const { asFragment } = render(
    <ModalBoxTitle title="Test Modal Box custom" id="boxId" titleIconVariant={BullhornIcon}>
      content
    </ModalBoxTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});
