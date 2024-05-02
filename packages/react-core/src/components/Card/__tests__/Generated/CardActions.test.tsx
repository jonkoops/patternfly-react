/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { CardActions } from '../../CardActions';

it('CardActions should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<CardActions children={<>ReactNode</>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
