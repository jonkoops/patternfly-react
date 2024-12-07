import { HTMLProps, DetailedHTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { css } from '@patternfly/react-styles';

export interface MastheadBrandProps extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
  /** Content rendered inside of the masthead brand. */
  children?: ReactNode;
  /** Additional classes added to the masthead brand. */
  className?: string;
}

export const MastheadBrand: FunctionComponent<MastheadBrandProps> = ({
  children,
  className,
  ...props
}: MastheadBrandProps) => (
  <div className={css(styles.mastheadBrand, className)} {...props}>
    {children}
  </div>
);
MastheadBrand.displayName = 'MastheadBrand';
