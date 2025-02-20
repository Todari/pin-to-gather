import {containerStyle} from './Container.style';
import {ContainerProps} from './Container.type';

export function Container({children, maxW, p, m, br, b, bg, center = false, ...props}: ContainerProps) {
  return (
    <div css={containerStyle({maxW, p, m, br, b, bg, center})} {...props}>
      {children}
    </div>
  );
}

export default Container;
