import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import GripVerticalIcon from '@patternfly/react-icons/dist/esm/icons/grip-vertical-icon';
import {
  type FunctionComponent,
  type MouseEvent as ReactMouseEvent
} from 'react';

export interface DraggableCellProps {
  id: string;
  className?: string;
  onClick?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  'aria-label'?: string;
}

export const DraggableCell: FunctionComponent<DraggableCellProps> = ({
  className,
  onClick,
  'aria-label': ariaLabel,
  id,
  ...props
}: DraggableCellProps) => (
  <Button
    id={id}
    variant="plain"
    className={className}
    type="button"
    aria-label={ariaLabel || `Draggable row draggable button`}
    onClick={onClick}
    {...props}
    icon={<GripVerticalIcon aria-hidden />}
  />
);

DraggableCell.displayName = 'DraggableCell';
