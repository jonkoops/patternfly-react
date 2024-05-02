/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it, describe, vi } from 'vitest';

import { OptionsMenuItem } from '../../OptionsMenuItem';
import { DropdownArrowContext } from '../../../Dropdown';

describe('OptionsMenuItem', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <DropdownArrowContext.Provider value={{ sendRef: vi.fn(), keyHandler: undefined }}>
        <OptionsMenuItem
          children={<>ReactNode</>}
          className={'string'}
          isSelected={false}
          isDisabled={true}
          onSelect={() => null as any}
          id={"''"}
        />{' '}
      </DropdownArrowContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
