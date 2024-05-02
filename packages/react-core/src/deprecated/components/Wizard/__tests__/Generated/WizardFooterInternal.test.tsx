/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { WizardFooterInternal } from '../../WizardFooterInternal';

it('WizardFooterInternal should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <WizardFooterInternal
      onNext={'any'}
      onBack={'any'}
      onClose={'any'}
      isValid={true}
      firstStep={true}
      activeStep={{ name: 'some step' }}
      nextButtonText={<div>ReactNode</div>}
      backButtonText={<div>ReactNode</div>}
      cancelButtonText={<div>ReactNode</div>}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
