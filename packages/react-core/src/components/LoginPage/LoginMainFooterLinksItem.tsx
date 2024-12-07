import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Login/login';
import { css } from '@patternfly/react-styles';

export interface LoginMainFooterLinksItemProps extends HTMLProps<HTMLLIElement> {
  /** Content rendered inside the footer link item */
  children?: ReactNode;
  /** Additional classes added to the footer link item  */
  className?: string;
}

export const LoginMainFooterLinksItem: FunctionComponent<LoginMainFooterLinksItemProps> = ({
  children = null,
  className = '',
  ...props
}: LoginMainFooterLinksItemProps) => (
  <li className={css(styles.loginMainFooterLinksItem, className)} {...props}>
    {children}
  </li>
);
LoginMainFooterLinksItem.displayName = 'LoginMainFooterLinksItem';
