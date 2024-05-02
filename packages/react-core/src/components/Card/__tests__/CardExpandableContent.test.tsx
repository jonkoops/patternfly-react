/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { CardContext } from '../Card';
import { CardExpandableContent } from '../CardExpandableContent';

test('renders successfully', () => {
  const { asFragment } = render(
    <CardContext.Provider value={{ isExpanded: true }}>
      <CardExpandableContent />
    </CardContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
