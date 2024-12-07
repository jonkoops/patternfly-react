import {
  type HTMLProps,
  type ReactNode,
  type KeyboardEvent as ReactKeyboardEvent,
  useRef,
  useState,
  useEffect,
  type TouchEvent as ReactTouchEvent,
  type MouseEvent as ReactMouseEvent,
  type FunctionComponent,
  useContext,
  useCallback,
  type CSSProperties,
  type RefObject,
  type Ref,
  forwardRef,
  createContext
} from 'react';

export interface TabsContextProps {
  variant: 'default' | 'secondary';
  mountOnEnter: boolean;
  unmountOnExit: boolean;
  localActiveKey: string | number;
  uniqueId: string;
  handleTabClick: (
    event: ReactMouseEvent<HTMLElement, MouseEvent>,
    eventKey: number | string,
    tabContentRef: RefObject<any>
  ) => void;
  handleTabClose?: (
    event: ReactMouseEvent<HTMLElement, MouseEvent>,
    eventKey: number | string,
    tabContentRef?: RefObject<any>
  ) => void;
}

export const TabsContext = createContext<TabsContextProps>({
  variant: 'default',
  mountOnEnter: false,
  unmountOnExit: false,
  localActiveKey: '',
  uniqueId: '',
  handleTabClick: () => null,
  handleTabClose: undefined
});

export const TabsContextProvider = TabsContext.Provider;
export const TabsContextConsumer = TabsContext.Consumer;
