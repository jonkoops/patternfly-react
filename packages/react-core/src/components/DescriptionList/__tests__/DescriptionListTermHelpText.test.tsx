/**
 * @vitest-environment jsdom
 */
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { DescriptionListTermHelpText } from '../DescriptionListTermHelpText';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<DescriptionListTermHelpText>test</DescriptionListTermHelpText>);
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders default class ${styles.descriptionListTerm}`, () => {
  render(<DescriptionListTermHelpText>test</DescriptionListTermHelpText>);
  expect(screen.getByText('test')).toHaveClass(styles.descriptionListTerm, { exact: true });
});

test('Renders custom className', () => {
  render(<DescriptionListTermHelpText className="custom">test</DescriptionListTermHelpText>);
  expect(screen.getByText('test')).toHaveClass('custom');
});

test('Renders spread props', () => {
  render(<DescriptionListTermHelpText id="id">test</DescriptionListTermHelpText>);
  expect(screen.getByText('test')).toHaveAttribute('id', 'id');
});
