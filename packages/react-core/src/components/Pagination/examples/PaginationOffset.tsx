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
  forwardRef
} from 'react';
import { Pagination } from '@patternfly/react-core';

export const PaginationOffset: FunctionComponent = () => {
  const [offset, setOffset] = useState(7);
  const [perPage, setPerPage] = useState(20);

  const onSetPage = (
    _event: ReactMouseEvent | KeyboardEvent | MouseEvent,
    newPage: number,
    _perPage: number | undefined,
    startIdx: number | undefined
  ) => {
    setOffset(startIdx || 0);
  };
  const onPerPageSelect = (_event: ReactMouseEvent | KeyboardEvent | MouseEvent, newPerPage: number) => {
    setPerPage(newPerPage);
    setOffset(0);
  };

  return (
    <Pagination
      itemCount={523}
      perPage={perPage}
      offset={offset}
      onSetPage={onSetPage}
      widgetId="offset-pagination-example"
      onPerPageSelect={onPerPageSelect}
      ouiaId="PaginationOffset"
    />
  );
};
