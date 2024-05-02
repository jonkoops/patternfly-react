/**
 * @vitest-environment jsdom
 */
import { configure, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';

import { KeyTypes } from '../../../../helpers';
import { Select } from '../Select';
import { SelectGroup } from '../SelectGroup';
import { SelectOption, SelectOptionObject } from '../SelectOption';
import { SelectDirection, SelectVariant } from '../selectConstants';

vi.mock('../../../../helpers/GenerateId/GenerateId');

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
  compareTo = (value: string): boolean => this.toString().includes(value);
}

const selectOptions = [
  <SelectOption id="option-1" value="Mr" key="00" />,
  <SelectOption id="option-2" value="Mrs" key="01" />,
  <SelectOption id="option-3" value="Ms" key="02" />,
  <SelectOption id="option-4" value="Other" key="03" />
];

const selectOptionsCustom = [
  <SelectOption id="option-1" value={new User('Mr', 'User', 'One')} key="0" />,
  <SelectOption id="option-2" value={new User('Mrs', 'New', 'User')} key="1" />,
  <SelectOption id="option-3" value={new User('Ms', 'Test', 'Three')} key="2" />
];

// Update testId accessor since data-testid is not passed to the parent component of Select
configure({ testIdAttribute: 'data-ouia-component-id' });

describe('Select', () => {
  describe('single select', () => {
    test('renders closed successfully', () => {
      const { asFragment } = render(
        <Select
          toggleId="single-select-closed"
          variant={SelectVariant.single}
          onSelect={vi.fn()}
          onToggle={vi.fn()}
          ouiaId="test-id"
        >
          {selectOptions}
        </Select>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    test('renders disabled successfully', () => {
      const { asFragment } = render(
        <Select
          toggleId="single-select-disabled"
          variant={SelectVariant.single}
          onSelect={vi.fn()}
          onToggle={vi.fn()}
          isDisabled
          ouiaId="test-id"
        >
          {selectOptions}
        </Select>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    test('renders expanded successfully', () => {
      const { asFragment } = render(
        <Select variant={SelectVariant.single} onSelect={vi.fn()} onToggle={vi.fn()} isOpen ouiaId="test-id">
          {selectOptions}
        </Select>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    test('renders expanded in strict mode successfully', () => {
      const consoleError = vi.spyOn(console, 'error');
      const { asFragment } = render(
        <React.StrictMode>
          <Select variant={SelectVariant.single} onSelect={vi.fn()} onToggle={vi.fn()} isOpen ouiaId="test-id">
            {selectOptions}
          </Select>
        </React.StrictMode>
      );
      expect(consoleError).not.toHaveBeenCalled();
      expect(asFragment()).toMatchSnapshot();
    });

    test('renders expanded successfully with custom objects', () => {
      const { asFragment } = render(
        <Select variant={SelectVariant.single} onSelect={vi.fn()} onToggle={vi.fn()} isOpen ouiaId="test-id">
          {selectOptionsCustom}
        </Select>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  test('renders up direction successfully', () => {
    const { asFragment } = render(
      <Select
        toggleId="select-up"
        variant={SelectVariant.single}
        direction={SelectDirection.up}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
        ouiaId="test-id"
      >
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe('custom select filter', () => {
    test('filters properly', async () => {
      const customFilter = (e: React.ChangeEvent<HTMLInputElement>, _value: string) => {
        let input: RegExp;
        try {
          input = new RegExp(e.target.value, 'i');
        } catch (err) {
          input = new RegExp(e.target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        }
        const typeaheadFilteredChildren =
          e.target.value !== ''
            ? selectOptions.filter((child: React.ReactNode) => input.test((child as React.ReactElement).props.value))
            : selectOptions;
        return typeaheadFilteredChildren;
      };
      const user = userEvent.setup();

      render(
        <Select
          toggleId="custom-select-filters"
          variant={SelectVariant.typeahead}
          onSelect={vi.fn()}
          onToggle={vi.fn()}
          onFilter={customFilter}
          isOpen
          ouiaId="test-id"
          aria-label="Some label"
        >
          {selectOptions}
        </Select>
      );

      await user.type(screen.getByTestId('test-id').querySelector('input'), 'r');

      expect(screen.getByText('Mr')).toBeInTheDocument();
      expect(screen.getByText('Mrs')).toBeInTheDocument();
      expect(screen.getByText('Other')).toBeInTheDocument();
    });
  });

  test('renders select groups successfully', () => {
    const { asFragment } = render(
      <Select variant={SelectVariant.single} onSelect={vi.fn()} onToggle={vi.fn()} isOpen isGrouped ouiaId="test-id">
        <SelectGroup label="group 1">{selectOptions}</SelectGroup>
        <SelectGroup label="group 2">{selectOptions}</SelectGroup>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders select with favorites successfully', () => {
  const selectOptionsFavorites = [
    <SelectOption id="option-1" value="Mr" key="00" />,
    <SelectOption id="option-2" value="Mrs" key="01" />,
    <SelectOption id="option-2" value="Ms" key="02" />,
    <SelectOption id="option-4" value="Other" key="03" />
  ];
  const { asFragment } = render(
    <Select
      variant={SelectVariant.single}
      onSelect={vi.fn()}
      onToggle={vi.fn()}
      isOpen
      isGrouped
      onFavorite={vi.fn()}
      favorites={['option-1']}
      ouiaId="test-id"
    >
      <SelectGroup key="group-1" label="group 1">
        {selectOptionsFavorites}
      </SelectGroup>
      <SelectGroup key="group-2" label="group 2">
        {selectOptionsFavorites}
      </SelectGroup>
    </Select>
  );
  expect(asFragment()).toMatchSnapshot();
});

describe('checkbox select', () => {
  test('renders closed successfully', () => {
    const { asFragment } = render(
      <Select
        toggleId="checkbox-select-closed"
        variant={SelectVariant.checkbox}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
        ouiaId="test-id"
      >
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders checkbox select selections properly', () => {
    const { asFragment } = render(
      <Select
        toggleId="checkbox-select-selections"
        variant={SelectVariant.checkbox}
        onToggle={vi.fn()}
        selections={[selectOptions[0]]}
        ouiaId="test-id"
      >
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders checkbox select selections properly when isCheckboxSelectionBadgeHidden is true', () => {
    const { asFragment } = render(
      <Select
        toggleId="checkbox-select-hidden-badge"
        variant={SelectVariant.checkbox}
        onToggle={vi.fn()}
        isCheckboxSelectionBadgeHidden
        selections={[selectOptions[0]]}
        ouiaId="test-id"
      >
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders expanded successfully', () => {
    const { asFragment } = render(
      <Select variant={SelectVariant.checkbox} onSelect={vi.fn()} onToggle={vi.fn()} isOpen ouiaId="test-id">
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders expanded with filtering successfully', () => {
    const { asFragment } = render(
      <Select
        toggleId="checkbox-select-expanded-filtered"
        variant={SelectVariant.checkbox}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
        onClear={vi.fn()}
        isOpen
        hasInlineFilter
        ouiaId="test-id"
      >
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders expanded successfully with custom objects', () => {
    const { asFragment } = render(
      <Select variant={SelectVariant.checkbox} onSelect={vi.fn()} onToggle={vi.fn()} isOpen ouiaId="test-id">
        {selectOptionsCustom}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders checkbox select groups successfully', () => {
    const { asFragment } = render(
      <Select variant={SelectVariant.checkbox} onSelect={vi.fn()} onToggle={vi.fn()} isOpen isGrouped ouiaId="test-id">
        <SelectGroup label="group 1">{selectOptions}</SelectGroup>
        <SelectGroup label="group 2">{selectOptions}</SelectGroup>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('typeahead select', () => {
  test('renders closed successfully', () => {
    const { asFragment } = render(
      <Select
        toggleId="typeahead-select-closed"
        variant={SelectVariant.typeahead}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
        ouiaId="test-id"
      >
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders expanded successfully', () => {
    const { asFragment } = render(
      <Select variant={SelectVariant.typeahead} onSelect={vi.fn()} onToggle={vi.fn()} isOpen ouiaId="test-id">
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders selected successfully', () => {
    const { asFragment } = render(
      <Select
        variant={SelectVariant.typeahead}
        selections="Mr"
        onSelect={vi.fn()}
        onToggle={vi.fn()}
        isOpen
        ouiaId="test-id"
      >
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('test select existing option on a non-creatable select', async () => {
    const user = userEvent.setup();

    render(
      <Select variant={SelectVariant.typeahead} onToggle={vi.fn()} isOpen ouiaId="test-id">
        {selectOptions}
      </Select>
    );

    const input = screen.getByTestId('test-id').querySelector('input');
    await user.type(input, 'Other');
    await user.type(input, `{${KeyTypes.Enter}}`);

    expect(screen.getByText('Other')).toBeVisible();
  });
});

describe('typeahead multi select', () => {
  test('renders closed successfully', () => {
    const { asFragment } = render(
      <Select
        toggleId="typeahead-multi-select-closed"
        variant={SelectVariant.typeaheadMulti}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
        ouiaId="test-id"
      >
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders expanded successfully', () => {
    const { asFragment } = render(
      <Select variant={SelectVariant.typeaheadMulti} onSelect={vi.fn()} onToggle={vi.fn()} isOpen ouiaId="test-id">
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders selected successfully', () => {
    const { asFragment } = render(
      <Select
        toggleId="typeahead-multi-select-selected"
        variant={SelectVariant.typeaheadMulti}
        selections={['Mr', 'Mrs']}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
        isOpen
        ouiaId="test-id"
      >
        {selectOptions}
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('API', () => {
  test('click on item', async () => {
    const mockToggle = vi.fn();
    const mockSelect = vi.fn();
    const user = userEvent.setup();

    render(
      <Select variant="single" onToggle={mockToggle} onSelect={mockSelect} isOpen ouiaId="test-id">
        {selectOptions}
      </Select>
    );

    await user.click(screen.getByRole('option', { name: 'Mr' }));

    expect(mockToggle).not.toHaveBeenCalled();
    expect(mockSelect).toHaveBeenCalled();
  });

  test('children only, no console error', () => {
    const myMock = vi.fn();
    global.console = { ...global.console, error: myMock };

    render(
      <Select variant="single" onSelect={vi.fn()} onToggle={vi.fn()} isOpen>
        {selectOptions}
      </Select>
    );

    expect(myMock).not.toHaveBeenCalled();
  });
});

describe('toggle icon', () => {
  const ToggleIcon = <div>Icon</div>;

  test('select single', () => {
    render(
      <Select
        toggleId="select-toggle-icon-single"
        toggleIcon={ToggleIcon}
        variant={SelectVariant.single}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
      >
        {selectOptions}
      </Select>
    );
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('select checkbox', () => {
    render(
      <Select
        toggleId="checkbox-select-toggle-icon"
        toggleIcon={ToggleIcon}
        variant={SelectVariant.checkbox}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
      >
        {selectOptions}
      </Select>
    );
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('typeahead select', () => {
    render(
      <Select
        toggleId="typeahead-select-toggle-icon"
        toggleIcon={ToggleIcon}
        variant={SelectVariant.typeahead}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
      >
        {selectOptions}
      </Select>
    );
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('typeahead multi select', () => {
    render(
      <Select
        toggleId="multi-typeahead-select-toggle-icon"
        toggleIcon={ToggleIcon}
        variant={SelectVariant.typeaheadMulti}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
      >
        {selectOptions}
      </Select>
    );
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });
});

describe('select with custom content', () => {
  test('renders closed successfully', () => {
    render(<Select toggleId="select-custom-content" customContent="testing custom" onToggle={vi.fn()} />);
    expect(screen.queryByText('testing custom')).toBeNull();
  });

  test('renders expanded successfully', () => {
    render(<Select customContent="testing custom" onToggle={vi.fn()} isOpen />);
    expect(screen.getByText('testing custom')).toBeInTheDocument();
  });
});

describe('select with placeholder', () => {
  test('applies the placeholder class when not selected', () => {
    render(<Select variant={SelectVariant.single} onSelect={vi.fn()} onToggle={vi.fn()} hasPlaceholderStyle />);
    expect(screen.getByRole('button', { name: 'Options menu' })).toHaveClass('pf-m-placeholder');
  });
  test('does not apply the placeholder class when selected', () => {
    render(
      <Select
        variant={SelectVariant.single}
        onSelect={vi.fn()}
        onToggle={vi.fn()}
        hasPlaceholderStyle
        selections={['selected option']}
      />
    );
    expect(screen.getByRole('button', { name: 'Options menu' })).not.toHaveClass('pf-m-placeholder');
  });
});

test('applies focus styling to the create option when reached via keyboard navigation', async () => {
  const user = userEvent.setup();

  render(
    <Select variant={SelectVariant.typeahead} onToggle={() => {}} isOpen isCreatable>
      {selectOptions}
    </Select>
  );

  const input = screen.getByRole('textbox');
  await user.type(input, `a{${KeyTypes.ArrowDown}}`);

  const createOption = screen.getByRole('option', { name: 'Create "a"' });

  expect(createOption.parentElement).toHaveClass('pf-m-focus');
});

test('appends create option to list of options', async () => {
  const user = userEvent.setup();

  render(
    <Select variant={SelectVariant.typeahead} onToggle={() => {}} isOpen isCreatable>
      {selectOptions}
    </Select>
  );

  const input = screen.getByRole('textbox');
  await user.type(input, `m`);

  const createOption = screen.getAllByRole('option')[3];
  expect(createOption).toHaveTextContent('Create "m"');
});

test('prepends create option to list of options if isCreateOptionOnTop flag is set', async () => {
  const user = userEvent.setup();

  render(
    <Select variant={SelectVariant.typeahead} onToggle={() => {}} isOpen isCreateOptionOnTop isCreatable>
      {selectOptions}
    </Select>
  );

  const input = screen.getByRole('textbox');
  await user.type(input, `m`);

  const createOption = screen.getAllByRole('option')[0];
  expect(createOption).toHaveTextContent('Create "m"');
});
