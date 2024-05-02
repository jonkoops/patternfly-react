/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { AccordionItem } from '../../AccordionItem';

it('AccordionItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<AccordionItem children={<>ReactNode</>} />);
  expect(asFragment()).toMatchSnapshot();
});
