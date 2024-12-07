import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar';

export interface SidebarContentProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  /** Removes the background color. */
  hasNoBackground?: boolean;
  /** Adds padding to the content. */
  hasPadding?: boolean;
  /** Variant of the sidebar content background. */
  backgroundVariant?: 'default' | 'secondary';
}

export const SidebarContent: FunctionComponent<SidebarContentProps> = ({
  className,
  children,
  hasNoBackground,
  hasPadding,
  backgroundVariant = 'default',
  ...props
}: SidebarContentProps) => (
  <div
    className={css(
      styles.sidebarContent,
      hasNoBackground && styles.modifiers.noBackground,
      hasPadding && styles.modifiers.padding,
      backgroundVariant !== 'default' && styles.modifiers[backgroundVariant],
      className
    )}
    {...props}
  >
    {children}
  </div>
);
SidebarContent.displayName = 'SidebarContent';
