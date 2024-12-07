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
import { FileUpload } from '@patternfly/react-core';

export const SimpleFileUpload: FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [filename, setFilename] = useState('');

  const handleFileInputChange = (_, file: File) => {
    setFilename(file.name);
  };

  const handleClear = (_event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFilename('');
    setValue('');
  };

  return (
    <FileUpload
      id="simple-file"
      value={value}
      filename={filename}
      filenamePlaceholder="Drag and drop a file or upload one"
      onFileInputChange={handleFileInputChange}
      onClearClick={handleClear}
      browseButtonText="Upload"
    />
  );
};
