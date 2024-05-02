/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { FormSelectOption } from '../../FormSelectOption';

it('FormSelectOption should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<FormSelectOption className={"''"} value={''} label={'string'} isDisabled={false} />);
  expect(asFragment()).toMatchSnapshot();
});
