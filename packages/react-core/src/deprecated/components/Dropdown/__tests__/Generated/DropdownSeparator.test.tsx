/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { DropdownSeparator } from '../../DropdownSeparator';
import { DropdownArrowContext } from '../../dropdownConstants';

describe('DropdownSeparator', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <DropdownArrowContext.Provider value={{ sendRef: vi.fn(), keyHandler: undefined }}>
        <DropdownSeparator className={"''"} onClick={() => console.log('clicked')} />
      </DropdownArrowContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
