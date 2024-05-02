/**
 * @vitest-environment jsdom
 */
import * as ReactCoreUtils from '@patternfly/react-core/src/helpers/util';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { NavContext } from '../../Nav';
import { NavList } from '../../NavList';

vi.spyOn(ReactCoreUtils, 'isElementInView').mockReturnValue(true);

describe('NavList', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <NavContext.Provider
        value={{
          onSelect: vi.fn(),
          onToggle: vi.fn(),
          updateIsScrollable: vi.fn(),
          isHorizontal: false,
          flyoutRef: undefined,
          setFlyoutRef: vi.fn()
        }}
      >
        <NavList children={<>ReactNode</>} className="" ariaLeftScroll="Scroll left" ariaRightScroll="Scroll right" />
      </NavContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
