/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { GenerateId } from '../GenerateId';

test('generates id', () => {
  const { asFragment } = render(
    <GenerateId isRandom={false}>{(id) => <div id={id}>div with random ID</div>}</GenerateId>
  );

  expect(asFragment()).toMatchSnapshot();
});
