import { FunctionComponent, MouseEvent, ReactNode, useState } from 'react';
import { DualListSelector as DLSDeprecated } from '@patternfly/react-core/deprecated';

export const DualListSelectorBasic: FunctionComponent = () => {
  const [availableOptions, setAvailableOptions] = useState<ReactNode[]>([
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4'
  ]);
  const [chosenOptions, setChosenOptions] = useState<ReactNode[]>([]);

  const onListChange = (
    event: MouseEvent<HTMLElement>,
    newAvailableOptions: ReactNode[],
    newChosenOptions: ReactNode[]
  ) => {
    setAvailableOptions(newAvailableOptions.sort());
    setChosenOptions(newChosenOptions.sort());
  };

  return (
    <DLSDeprecated
      availableOptions={availableOptions}
      chosenOptions={chosenOptions}
      onListChange={onListChange}
      id="dual-list-selector-basic"
    />
  );
};
