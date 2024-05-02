/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';

import { SelectOption, SelectOptionObject } from '../SelectOption';
import { SelectProvider } from '../selectConstants';

class User implements SelectOptionObject {
  private firstName: string;
  private lastName: string;
  private title: string;

  constructor(title: string, firstName: string, lastName: string) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  toString = (): string => `${this.title}: ${this.firstName} ${this.lastName}`;
}

describe('SelectOption', () => {
  test('renders with value parameter successfully', () => {
    const { asFragment } = render(
      <SelectProvider
        value={{
          onSelect: () => {},
          onFavorite: () => {},
          onClose: () => {},
          variant: 'single',
          inputIdPrefix: '',
          shouldResetOnSelect: true
        }}
      >
        <SelectOption id="option-1" value="test" sendRef={vi.fn()} data-testid="test-id" />
      </SelectProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with description successfully', () => {
    const { asFragment } = render(
      <SelectProvider
        value={{
          onSelect: () => {},
          onFavorite: () => {},
          onClose: () => {},
          variant: 'single',
          inputIdPrefix: '',
          shouldResetOnSelect: true
        }}
      >
        <SelectOption
          id="option-1"
          value="test"
          description="This is a description"
          sendRef={vi.fn()}
          data-testid="test-id"
        />
      </SelectProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with item count successfully', () => {
    const { asFragment } = render(
      <SelectProvider
        value={{
          onSelect: () => {},
          onFavorite: () => {},
          onClose: () => {},
          variant: 'single',
          inputIdPrefix: '',
          shouldResetOnSelect: true
        }}
      >
        <SelectOption id="option-1" value="test" itemCount={3} sendRef={vi.fn()} data-testid="test-id" />
      </SelectProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with custom display successfully', () => {
    const { asFragment } = render(
      <SelectProvider
        value={{
          onSelect: () => {},
          onFavorite: () => {},
          onClose: () => {},
          variant: 'single',
          inputIdPrefix: '',
          shouldResetOnSelect: true
        }}
      >
        <SelectOption id="option-1" value="test" sendRef={vi.fn()}>
          <div>test display</div>
        </SelectOption>
      </SelectProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with custom user object successfully', () => {
    const { asFragment } = render(
      <SelectProvider
        value={{
          onSelect: () => {},
          onFavorite: () => {},
          onClose: () => {},
          variant: 'single',
          inputIdPrefix: '',
          shouldResetOnSelect: true
        }}
      >
        <SelectOption id="option-1" value={new User('Mr.', 'Test', 'User')} sendRef={vi.fn()} data-testid="test-id" />
      </SelectProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with custom display and custom user object successfully', () => {
    const { asFragment } = render(
      <SelectProvider
        value={{
          onSelect: () => {},
          onFavorite: () => {},
          onClose: () => {},
          variant: 'single',
          inputIdPrefix: '',
          shouldResetOnSelect: true
        }}
      >
        <SelectOption id="option-1" value={new User('Mr.', 'Test', 'User')} sendRef={vi.fn()}>
          <div>test display</div>
        </SelectOption>
      </SelectProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom component', () => {
    const { asFragment } = render(
      <SelectProvider
        value={{
          onSelect: () => {},
          onFavorite: () => {},
          onClose: () => {},
          variant: 'single',
          inputIdPrefix: '',
          shouldResetOnSelect: true
        }}
      >
        <SelectOption id="option-1" value={new User('Mr.', 'Test', 'User')} sendRef={vi.fn()} component="div">
          <div>test display</div>
        </SelectOption>
      </SelectProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe('disabled', () => {
    test('renders disabled successfully', () => {
      const { asFragment } = render(
        <SelectProvider
          value={{
            onSelect: () => {},
            onFavorite: () => {},
            onClose: () => {},
            variant: 'single',
            inputIdPrefix: '',
            shouldResetOnSelect: true
          }}
        >
          <SelectOption id="option-1" isDisabled value="test" sendRef={vi.fn()} data-testid="test-id" />
        </SelectProvider>
      );

      expect(screen.getByText('test')).toHaveClass('pf-m-disabled');
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('is selected', () => {
    test('renders selected successfully', () => {
      const { asFragment } = render(
        <SelectProvider
          value={{
            onSelect: () => {},
            onFavorite: () => {},
            onClose: () => {},
            variant: 'single',
            inputIdPrefix: '',
            shouldResetOnSelect: true
          }}
        >
          <SelectOption id="option-1" isSelected value="test" sendRef={vi.fn()} data-testid="test-id" />
        </SelectProvider>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('checked', () => {
    test('renders with checked successfully', () => {
      const { asFragment } = render(
        <SelectProvider
          value={{
            onSelect: () => {},
            onFavorite: () => {},
            onClose: () => {},
            variant: 'single',
            inputIdPrefix: '',
            shouldResetOnSelect: true
          }}
        >
          <SelectOption id="option-1" isChecked value="test" sendRef={vi.fn()} data-testid="test-id" />
        </SelectProvider>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('favorites warning', () => {
    test('generates warning when id is undefined and isFavorites is set', () => {
      const myMock = vi.fn() as any;
      global.console = { error: myMock } as any;

      render(
        <SelectProvider
          value={{
            onSelect: () => {},
            onFavorite: () => {},
            onClose: () => {},
            variant: 'single',
            inputIdPrefix: '',
            shouldResetOnSelect: true
          }}
        >
          <SelectOption isFavorite value="test" sendRef={vi.fn()} />
        </SelectProvider>
      );

      expect(myMock).toHaveBeenCalled();
    });
  });
});
