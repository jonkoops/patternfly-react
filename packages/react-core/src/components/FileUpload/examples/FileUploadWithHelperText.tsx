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
  ChangeEvent
} from 'react';
import { FileUpload, FileUploadHelperText, HelperText, HelperTextItem, DropEvent } from '@patternfly/react-core';

export const FileUploadWithHelperText: FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [filename, setFilename] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileInputChange = (_, file: File) => {
    setFilename(file.name);
  };

  const handleTextChange = (_event: ChangeEvent<HTMLTextAreaElement>, value: string) => {
    setValue(value);
  };

  const handleDataChange = (_event: DropEvent, value: string) => {
    setValue(value);
  };

  const handleClear = (_event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFilename('');
    setValue('');
  };

  const handleFileReadStarted = (_event: DropEvent, _fileHandle: File) => {
    setIsLoading(true);
  };

  const handleFileReadFinished = (_event: DropEvent, _fileHandle: File) => {
    setIsLoading(false);
  };

  return (
    <FileUpload
      id="file-upload-helper-text"
      type="text"
      value={value}
      filename={filename}
      filenamePlaceholder="Drag and drop a file or upload one"
      onFileInputChange={handleFileInputChange}
      onDataChange={handleDataChange}
      onTextChange={handleTextChange}
      onReadStarted={handleFileReadStarted}
      onReadFinished={handleFileReadFinished}
      onClearClick={handleClear}
      isLoading={isLoading}
      allowEditingUploadedText={false}
      browseButtonText="Upload"
      browseButtonAriaDescribedby="helper-text-example-helpText"
    >
      <FileUploadHelperText>
        <HelperText>
          <HelperTextItem id="helper-text-example-helpText">Upload a CSV file</HelperTextItem>
        </HelperText>
      </FileUploadHelperText>
    </FileUpload>
  );
};
