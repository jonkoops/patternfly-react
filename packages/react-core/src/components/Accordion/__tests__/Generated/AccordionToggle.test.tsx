/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { AccordionToggle } from '../../AccordionToggle';

it('AccordionToggle should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <AccordionToggle
      children={<>ReactNode</>}
      className={"''"}
      isExpanded={false}
      id={'string'}
      component={() => <div />}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
