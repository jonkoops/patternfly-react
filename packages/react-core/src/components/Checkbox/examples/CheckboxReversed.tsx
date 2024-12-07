import { FunctionComponent } from 'react';
import { Checkbox } from '@patternfly/react-core';

export const CheckboxReversed: FunctionComponent = () => (
  <Checkbox labelPosition="start" label="Reversed checkbox example" id="checkbox-reversed" name="checkbox-reversed" />
);
