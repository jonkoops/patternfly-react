/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { DropdownItem } from '../../DropdownItem';
import { DropdownArrowContext } from '../../dropdownConstants';

describe('DropdownItem', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <DropdownArrowContext.Provider value={{ sendRef: vi.fn(), keyHandler: undefined }}>
        <DropdownItem
          children={<>ReactNode</>}
          className={"''"}
          listItemClassName={'string'}
          component={'a'}
          isDisabled={false}
          isPlainText={false}
          isHovered={false}
          href={'string'}
          tooltip={null}
          tooltipProps={undefined}
          additionalChild={<div>ReactNode</div>}
          customChild={<div>ReactNode</div>}
          icon={null}
        />
      </DropdownArrowContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
