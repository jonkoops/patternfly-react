/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { WizardNav } from '../../WizardNav';

it('WizardNav should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <WizardNav children={'any'} aria-label={'string'} aria-labelledby={'string'} isOpen={false} returnList={false} />
  );
  expect(asFragment()).toMatchSnapshot();
});
