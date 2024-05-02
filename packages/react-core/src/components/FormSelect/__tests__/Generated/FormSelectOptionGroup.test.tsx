/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { FormSelectOptionGroup } from '../../FormSelectOptionGroup';

it('FormSelectOptionGroup should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <FormSelectOptionGroup children={<>ReactNode</>} className={"''"} label={'string'} isDisabled={false} />
  );
  expect(asFragment()).toMatchSnapshot();
});
