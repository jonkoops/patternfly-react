/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { AccordionContent } from '../../AccordionContent';

it('AccordionContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <AccordionContent
      children={<>ReactNode</>}
      className={"''"}
      id={"''"}
      isHidden={false}
      isFixed={false}
      aria-label={"''"}
      component={() => <div />}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
