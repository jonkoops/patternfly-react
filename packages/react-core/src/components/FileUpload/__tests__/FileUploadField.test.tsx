/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test, vi } from 'vitest';

import { FileUploadField } from '../FileUploadField';

test('simple fileuploadfield', () => {
  const browserBtnClickHandler = vi.fn();
  const clearBtnClickHandler = vi.fn();

  const { asFragment } = render(
    <FileUploadField
      id="custom-file-upload"
      type="text"
      value={''}
      filename={''}
      filenamePlaceholder="Do something custom with this!"
      onBrowseButtonClick={browserBtnClickHandler}
      onClearButtonClick={clearBtnClickHandler}
      isClearButtonDisabled={false}
      isLoading={false}
      isDragActive={false}
      hideDefaultPreview={false}
    >
      {<p>A custom preview of the uploaded file can be passed as children</p>}
    </FileUploadField>
  );
  expect(asFragment()).toMatchSnapshot();
});
