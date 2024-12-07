import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';
import { type FunctionComponent, type MouseEvent as ReactMouseEvent } from 'react';

export interface FavoritesCellProps {
  id?: string;
  className?: string;
  onFavorite?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isFavorited?: boolean;
  rowIndex?: number;
}

export const FavoritesCell: FunctionComponent<FavoritesCellProps> = ({
  className = '' as string,
  onFavorite,
  isFavorited,
  rowIndex,
  ...props
}: FavoritesCellProps) => {
  const ariaProps =
    rowIndex === undefined
      ? {}
      : {
          id: `favorites-button-${rowIndex}`,
          'aria-labelledby': `favorites-button-${rowIndex}`
        };
  return (
    <Button
      variant="plain"
      className={className}
      type="button"
      aria-label={isFavorited ? 'Starred' : 'Not starred'}
      onClick={onFavorite}
      {...ariaProps}
      {...props}
      icon={<StarIcon aria-hidden />}
    />
  );
};
FavoritesCell.displayName = 'FavoritesCell';
