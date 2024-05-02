/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it, describe, vi } from 'vitest';

import { ApplicationLauncherSeparator } from '../../ApplicationLauncherSeparator';
import { DropdownArrowContext } from '../../../Dropdown/dropdownConstants';

describe('ApplicationLauncherSeparator', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <DropdownArrowContext.Provider value={{ sendRef: vi.fn(), keyHandler: undefined }}>
        <ApplicationLauncherSeparator />
      </DropdownArrowContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
