/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { WizardFooter } from '../../WizardFooter';

it('WizardFooter should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<WizardFooter children={'any'} />);
  expect(asFragment()).toMatchSnapshot();
});
