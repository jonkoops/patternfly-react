/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PaginationToggleTemplateProps } from '../..';
import { PaginationOptionsMenu } from '../../PaginationOptionsMenu';

it('PaginationOptionsMenu should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <PaginationOptionsMenu
      className={"''"}
      widgetId={"''"}
      isDisabled={false}
      dropDirection={'up'}
      perPageOptions={[]}
      itemsPerPageTitle={"'Items per page'"}
      page={42}
      perPageSuffix={"'per page'"}
      itemsTitle={"'items'"}
      itemCount={0}
      firstIndex={0}
      lastIndex={0}
      isLastFullPageShown={false}
      perPage={0}
      lastPage={42}
      toggleTemplate={({ firstIndex, lastIndex, itemCount, itemsTitle }: PaginationToggleTemplateProps) => (
        <React.Fragment>
          <b>
            {firstIndex} - {lastIndex}
          </b>Custom toggle template
          of<b>{itemCount}</b> {itemsTitle}
        </React.Fragment>
      )}
      onPerPageSelect={() => null as any}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
