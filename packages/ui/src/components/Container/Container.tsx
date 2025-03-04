import {cx} from '@emotion/css';

import {containerStyle} from './Container.style';
import {ContainerProps} from './Container.type';

export function Container({children, maxW, p, m, br, b, bg, center = false, className, ...props}: ContainerProps) {
  return (
    <div className={cx(containerStyle({maxW, p, m, br, b, bg, center}), className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
