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
import FileUploadIcon from '@patternfly/react-icons/dist/esm/icons/file-upload-icon';

export const CustomPreviewFileUpload: FunctionComponent = () => {
  const [value, setValue] = useState<File>();
  const [filename, setFilename] = useState('');

  const handleFileInputChange = (_, file: File) => {
    setValue(file);
    setFilename(file.name);
  };

  const handleClear = (_event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFilename('');
    setValue(undefined);
  };

  return (
    <FileUpload
      id="customized-preview-file"
      value={value}
      filename={filename}
      filenamePlaceholder="Drag and drop a file or upload one"
      onFileInputChange={handleFileInputChange}
      onClearClick={handleClear}
      hideDefaultPreview
      browseButtonText="Upload"
    >
      {value && (
        <div>
          <FileUploadIcon width="2em" height="2em" /> Custom preview here for your {value.size}-byte file named{' '}
          {value.name}
        </div>
      )}
    </FileUpload>
  );
};
