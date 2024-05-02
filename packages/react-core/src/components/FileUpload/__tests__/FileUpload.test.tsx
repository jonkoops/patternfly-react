/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test, vi } from 'vitest';

import { FileUpload } from '../FileUpload';

test('simple fileupload', () => {
  const readStartedHandler = vi.fn();
  const readFinishedHandler = vi.fn();

  const { asFragment } = render(
    <FileUpload
      id="simple-text-file"
      type="text"
      value={''}
      filename={''}
      onReadStarted={readStartedHandler}
      onReadFinished={readFinishedHandler}
      isLoading={false}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
