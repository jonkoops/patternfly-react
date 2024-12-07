import { HTMLProps, DetailedHTMLProps, ReactNode, ElementType, ComponentType, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { css } from '@patternfly/react-styles';

export interface MastheadLogoProps extends DetailedHTMLProps<HTMLProps<HTMLAnchorElement>, HTMLAnchorElement> {
  /** Content rendered inside of the masthead logo. */
  children?: ReactNode;
  /** Additional classes added to the masthead logo. */
  className?: string;
  /** Component type of the masthead logo. */
  component?: ElementType<any> | ComponentType<any>;
}

export const MastheadLogo: FunctionComponent<MastheadLogoProps> = ({
  children,
  className,
  component,
  ...props
}: MastheadLogoProps) => {
  let Component = component as any;
  if (!component) {
    if (props?.href !== undefined) {
      Component = 'a';
    } else {
      Component = 'span';
    }
  }
  return (
    <Component className={css(styles.mastheadLogo, className)} {...(Component === 'a' && { tabIndex: 0 })} {...props}>
      {children}
    </Component>
  );
};
MastheadLogo.displayName = 'MastheadLogo';
