import { FunctionComponent, FormEvent, useState } from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchWithoutLabel: FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <Switch
      id="no-label-switch-on"
      aria-label="Togglable option for no visible label example"
      isChecked={isChecked}
      onChange={handleChange}
    />
  );
};
