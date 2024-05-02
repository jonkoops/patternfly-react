/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ListVariant } from '../../List';
import { LoginPage } from '../LoginPage';

const needAccountMesseage = (
  <React.Fragment>
    Login to your account <a href="https://www.patternfly.org">Need an account?</a>
  </React.Fragment>
);

test('check loginpage example against snapshot', () => {
  const { asFragment } = render(
    <LoginPage
      footerListVariants={ListVariant.inline}
      brandImgSrc="Brand src"
      brandImgAlt="Pf-logo"
      backgroundImgSrc="Background src"
      footerListItems="English"
      textContent="This is placeholder text only."
      loginTitle="Log into your account"
      signUpForAccountMessage={needAccountMesseage}
      socialMediaLoginContent="Footer"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
