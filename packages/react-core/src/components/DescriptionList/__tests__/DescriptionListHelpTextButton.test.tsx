/**
 * @vitest-environment jsdom
 */
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { DescriptionListTermHelpTextButton } from '../DescriptionListTermHelpTextButton';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<DescriptionListTermHelpTextButton>test</DescriptionListTermHelpTextButton>);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders default class ${styles.descriptionListText}`, () => {
  render(<DescriptionListTermHelpTextButton>test</DescriptionListTermHelpTextButton>);
  expect(screen.getByText('test')).toHaveClass(`${styles.descriptionListText} ${styles.modifiers.helpText}`, {
    exact: true
  });
});

test('Renders custom className', () => {
  render(<DescriptionListTermHelpTextButton className="custom">test</DescriptionListTermHelpTextButton>);
  expect(screen.getByText('test')).toHaveClass('custom');
});

test('Renders spread props', () => {
  render(<DescriptionListTermHelpTextButton id="id">test</DescriptionListTermHelpTextButton>);
  expect(screen.getByText('test')).toHaveAttribute('id', 'id');
});
