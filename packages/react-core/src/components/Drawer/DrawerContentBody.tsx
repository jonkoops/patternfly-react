import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerContentBodyProps extends HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content to be rendered in the drawer */
  children?: ReactNode;
  /** Indicates if there should be padding around the drawer content body */
  hasPadding?: boolean;
}

export const DrawerContentBody: FunctionComponent<DrawerContentBodyProps> = ({
  className = '',
  children,
  hasPadding = false,
  ...props
}: DrawerContentBodyProps) => (
  <div className={css(styles.drawerBody, hasPadding && styles.modifiers.padding, className)} {...props}>
    {children}
  </div>
);
DrawerContentBody.displayName = 'DrawerContentBody';
