import { HTMLProps, ReactNode, FunctionComponent, useContext } from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerMain } from './DrawerMain';
import { DrawerContext } from './Drawer';

export enum DrawerContentColorVariant {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary'
}

export interface DrawerContentProps extends HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content to be rendered in the drawer. */
  children?: ReactNode;
  /** Content rendered in the drawer panel. */
  panelContent: ReactNode;
  /** Color variant of the background of the drawer panel */
  colorVariant?: DrawerContentColorVariant | 'default' | 'primary' | 'secondary';
}

export const DrawerContent: FunctionComponent<DrawerContentProps> = ({
  className,
  children,
  panelContent,
  colorVariant = DrawerContentColorVariant.default,
  ...props
}: DrawerContentProps) => {
  const { drawerContentRef } = useContext(DrawerContext);

  return (
    <DrawerMain>
      <div
        className={css(
          styles.drawerContent,
          colorVariant === DrawerContentColorVariant.primary && styles.modifiers.primary,
          colorVariant === DrawerContentColorVariant.secondary && styles.modifiers.secondary,
          className
        )}
        ref={drawerContentRef}
        {...props}
      >
        {children}
      </div>
      {panelContent}
    </DrawerMain>
  );
};
DrawerContent.displayName = 'DrawerContent';
