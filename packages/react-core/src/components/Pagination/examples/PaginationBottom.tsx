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
import { Pagination, PaginationVariant } from '@patternfly/react-core';

export const PaginationBottom: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

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
      itemCount={333}
      widgetId="bottom-example"
      perPage={perPage}
      page={page}
      variant={PaginationVariant.bottom}
      onSetPage={onSetPage}
      onPerPageSelect={onPerPageSelect}
    />
  );
};
