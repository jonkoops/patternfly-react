/**
 * @vitest-environment jsdom
 */
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { AccordionExpandableContentBody } from '../AccordionExpandableContentBody';

test('Renders without children', () => {
  const { asFragment } = render(<AccordionExpandableContentBody />);

  /* a snapshot test is used here because this component isn't selectable via better screen queries without children 
    as it doesn't spread other props to its container
    */
  expect(asFragment()).toMatchSnapshot();
});

test('Renders children', () => {
  render(<AccordionExpandableContentBody>Test</AccordionExpandableContentBody>);

  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with class name ${styles.accordionExpandableContentBody}`, () => {
  render(<AccordionExpandableContentBody>Test</AccordionExpandableContentBody>);

  expect(screen.getByText('Test')).toHaveClass(styles.accordionExpandableContentBody);
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<AccordionExpandableContentBody>Test</AccordionExpandableContentBody>);
  expect(asFragment()).toMatchSnapshot();
});
