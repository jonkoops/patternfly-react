/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { InputGroupText } from '../InputGroupText';

describe('InputGroupText', () => {
  test('renders', () => {
    render(
      <InputGroupText className="inpt-grp-text" id="email-npt-grp">
        @
      </InputGroupText>
    );
    expect(screen.getByText('@')).toBeInTheDocument();
  });
});
