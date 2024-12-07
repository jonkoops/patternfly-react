import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/layouts/Stack/stack';
import { css } from '@patternfly/react-styles';

export interface StackItemProps extends HTMLProps<HTMLDivElement> {
  /** Flag indicating if this stack layout item should fill the available vertical space. */
  isFilled?: boolean;
  /** Additional classes added to the stack layout item. */
  children?: ReactNode;
  /** Content rendered inside the stack layout item. */
  className?: string;
  /** Sets the base component to render. Defaults to div. */
  component?: ReactNode;
}

export const StackItem: FunctionComponent<StackItemProps> = ({
  isFilled = false,
  className = '',
  children = null,
  component = 'div',
  ...props
}: StackItemProps) => {
  const Component = component as any;
  return (
    <Component {...props} className={css(styles.stackItem, isFilled && styles.modifiers.fill, className)}>
      {children}
    </Component>
  );
};
StackItem.displayName = 'StackItem';
