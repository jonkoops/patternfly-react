import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageBodyProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the section */
  children?: ReactNode;
  /** Additional classes added to the section */
  className?: string;
}

export const PageBody: FunctionComponent<PageBodyProps> = ({ className, children, ...props }: PageBodyProps) => (
  <div {...props} className={css(styles.pageMainBody, className)}>
    {children}
  </div>
);

PageBody.displayName = 'PageBody';
