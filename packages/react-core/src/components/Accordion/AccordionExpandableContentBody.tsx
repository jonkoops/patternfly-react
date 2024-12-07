import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

export interface AccordionExpandableContentBodyProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the accordion content body  */
  children?: ReactNode;
}

export const AccordionExpandableContentBody: FunctionComponent<AccordionExpandableContentBodyProps> = ({
  children = null,
  ...props
}: AccordionExpandableContentBodyProps) => (
  <div className={css(styles.accordionExpandableContentBody)} {...props}>
    {children}
  </div>
);
AccordionExpandableContentBody.displayName = 'AccordionExpandableContentBody';
