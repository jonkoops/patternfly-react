import { FunctionComponent, FormEvent, useState } from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchCheckedWithLabel: FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <Switch
      label="Togglable option for check icon example"
      id="checked-with-label-switch-on"
      isChecked={isChecked}
      hasCheckIcon
      onChange={handleChange}
    />
  );
};
