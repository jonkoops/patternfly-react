/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { OptionsMenuToggleWithText } from '../../OptionsMenuToggleWithText';

it('OptionsMenuToggleWithText should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <OptionsMenuToggleWithText
      parentId={"''"}
      toggleText={<div>ReactNode</div>}
      toggleTextClassName={"''"}
      toggleButtonContents={<div>ReactNode</div>}
      toggleButtonContentsClassName={"''"}
      onToggle={() => null as any}
      isOpen={false}
      isPlain={false}
      isActive={false}
      isDisabled={false}
      aria-haspopup={true}
      aria-label={"'Options menu'"}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
