/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { FormAlert } from '../FormAlert';

describe('Form Alert component', () => {
  test('should render form group required variant', () => {
    const { asFragment } = render(<FormAlert></FormAlert>);
    expect(asFragment()).toMatchSnapshot();
  });
});
