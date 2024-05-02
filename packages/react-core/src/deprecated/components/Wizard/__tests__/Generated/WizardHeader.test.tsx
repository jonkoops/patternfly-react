/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { WizardHeader } from '../../WizardHeader';

it('WizardHeader should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <WizardHeader
      onClose={() => undefined}
      title={'string'}
      description={<div>ReactNode</div>}
      hideClose={true}
      closeButtonAriaLabel={'string'}
      titleId={'string'}
      descriptionId={'string'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
