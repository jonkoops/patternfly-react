/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { PageHeader } from '../PageHeader';

test('Check page vertical layout example against snapshot', () => {
  const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" onNavToggle={() => undefined} />;
  const { asFragment } = render(Header);
  expect(asFragment()).toMatchSnapshot();
});

test('Test that passed logoComponent overrides default', () => {
  const Header = (
    <PageHeader logo="Logo" logoComponent="div" headerTools="PageHeaderTools | Avatar" onNavToggle={() => undefined} />
  );
  const { asFragment } = render(Header);
  expect(asFragment()).toMatchSnapshot();
});

test('Test that logoComponent with href is an anchor', () => {
  const Header = (
    <PageHeader
      logo="Logo"
      logoProps={{ href: '#' }}
      headerTools="PageHeaderTools | Avatar"
      onNavToggle={() => undefined}
    />
  );
  const { asFragment } = render(Header);
  expect(asFragment()).toMatchSnapshot();
});
