/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { WizardToggle } from '../../WizardToggle';

it('WizardToggle should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <WizardToggle
      nav={(_isWizardNavOpen: boolean) => undefined as unknown as React.ReactElement}
      steps={[]}
      activeStep={{ name: 'some step' }}
      children={<div>ReactNode</div>}
      hasNoBodyPadding={false}
      isNavOpen={true}
      onNavToggle={() => undefined}
      aria-label={"'Wizard Toggle'"}
      mainAriaLabelledBy={'null'}
      mainAriaLabel={'null'}
      isInPage={true}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
