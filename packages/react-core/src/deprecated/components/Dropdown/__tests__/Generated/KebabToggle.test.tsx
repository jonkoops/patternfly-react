/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { KebabToggle } from '../../KebabToggle';

it('KebabToggle should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <KebabToggle
      id={"''"}
      children={<>ReactNode</>}
      className={"''"}
      isOpen={false}
      aria-label={"'Actions'"}
      onToggle={() => undefined as void}
      parentRef={null}
      isActive={false}
      isDisabled={false}
      isPlain={false}
      type={'button'}
      bubbleEvent={false}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
