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
  ...props
}: BoxProps) {
  return (
    <div css={boxStyle({w, h, z, p, m, br, b, bg, fixed, center})} {...props}>
      {children}
    </div>
  );
}

export default Box;
