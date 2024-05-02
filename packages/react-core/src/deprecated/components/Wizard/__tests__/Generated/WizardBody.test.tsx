/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { WizardBody } from '../../WizardBody';

it('WizardBody should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <WizardBody
      children={'any'}
      hasNoBodyPadding={false}
      aria-label={'null'}
      aria-labelledby={'string'}
      mainComponent={'div'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
