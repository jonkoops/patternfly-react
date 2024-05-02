/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, test, vi } from 'vitest';

import { WizardStepType } from '..';
import * as WizardContext from '../WizardContext';
import { WizardStep, WizardStepProps } from '../WizardStep';

const testStepProps: WizardStepProps = {
  id: 'test-step',
  name: 'Test step',
  footer: <>Step footer</>
};

const testStep: WizardStepType = {
  ...testStepProps,
  index: 1
};

const setStep = vi.fn();

const wizardContext: WizardContext.WizardContextProps = {
  setStep,
  steps: [testStep],
  activeStep: testStep,
  footer: <>Wizard footer</>,
  goToNextStep: vi.fn(),
  goToPrevStep: vi.fn(),
  close: vi.fn(),
  goToStepById: vi.fn(),
  goToStepByName: vi.fn(),
  goToStepByIndex: vi.fn(),
  setFooter: vi.fn(),
  getStep: vi.fn()
};

vi.spyOn(WizardContext, 'useWizardContext').mockReturnValue(wizardContext);

test('renders without children', () => {
  const { container } = render(<WizardStep id="test-step" name="Test step" />);
  expect(container).toBeVisible();
});

test('renders with children', () => {
  render(
    <WizardStep id="test-step" name="Test step">
      content
    </WizardStep>
  );

  expect(screen.getByText('content')).toBeVisible();
});

test('excludes WizardBody when body is set to null', () => {
  render(<WizardStep id="test-step" name="Test step" body={null} />);
  expect(screen.queryByRole('main')).toBeNull();
});

test('updates "isDisabled" in context when the value changes', () => {
  render(<WizardStep {...testStep} isDisabled />);
  expect(setStep).toHaveBeenCalledWith({ ...testStepProps, isDisabled: true, isVisited: true });
});

test('updates "navItem" in context when the value changes', () => {
  const testNavItem = <>Some nav item</>;
  render(<WizardStep {...testStep} navItem={testNavItem} />);

  expect(setStep).toHaveBeenCalledWith({ ...testStepProps, navItem: testNavItem, isVisited: true });
});

test('updates "status" in context when the value changes', () => {
  render(<WizardStep {...testStep} status="error" />);
  expect(setStep).toHaveBeenCalledWith({ ...testStepProps, status: 'error', isVisited: true });
});
