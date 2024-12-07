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

export const PaginationOnePage: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const onSetPage = (_event: ReactMouseEvent | KeyboardEvent | MouseEvent, newPage: number) => {
    setPage(newPage);
  };

  const onPerPageSelect = (
    _event: ReactMouseEvent | KeyboardEvent | MouseEvent,
    newPerPage: number,
    newPage: number
  ) => {
    setPerPage(newPerPage);
    setPage(newPage);
  };

  return (
    <Pagination
      itemCount={15}
      perPage={perPage}
      page={page}
      onSetPage={onSetPage}
      widgetId="one-page-example"
      onPerPageSelect={onPerPageSelect}
    />
  );
};
