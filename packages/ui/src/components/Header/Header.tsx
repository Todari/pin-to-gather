/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useTheme} from '@theme/DesignProvider';

interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Header = ({left, right}: Props) => {
  const {theme} = useTheme();

  return <header css={css({width: '100vw', position: 'fixed', top: 0, left: 0, right: 0})}></header>;
};

export default Header;
