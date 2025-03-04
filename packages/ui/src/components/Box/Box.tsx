import {cx} from '@emotion/css';

import {boxStyle} from './Box.style';
import {BoxProps} from './Box.type';

export function Box({
  children,
  w = 'auto',
  h = 'auto',
  z,
  p,
  m,
  br,
  b,
  bg,
  fixed = false,
  center = false,
  className,
  ...props
}: BoxProps) {
  return (
    <div className={cx(boxStyle({w, h, z, p, m, br, b, bg, fixed, center}), className)} {...props}>
      {children}
    </div>
  );
}

export default Box;
