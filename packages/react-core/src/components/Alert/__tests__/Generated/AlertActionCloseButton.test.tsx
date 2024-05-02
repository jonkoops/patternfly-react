/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { AlertActionCloseButton } from '../../AlertActionCloseButton';
import { AlertContext } from '../../AlertContext';

describe('AlertActionCloseButton', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <AlertContext.Provider value={{ title: 'test title', variantLabel: 'some label' }}>
        <AlertActionCloseButton
          className=""
          onClose={() => console.log('close clicked')}
          aria-label=""
          variantLabel=""
        />
      </AlertContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
