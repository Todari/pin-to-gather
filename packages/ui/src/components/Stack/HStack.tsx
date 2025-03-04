import React from 'react';

import {hStackStyle} from './Stack.style';
import {HStackProps} from './Stack.type';
import {cx} from '@emotion/css';

export function HStack({
  children,
  gap = 0,
  justify = 'flex-start',
  divider,
  p,
  m,
  br,
  b,
  bg,
  className,
  ...props
}: HStackProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={cx(hStackStyle({gap, justify, p, m, br, b, bg}), className)} {...props}>
      {childrenArray.map((child, index) => (
        <React.Fragment key={React.isValidElement(child) ? child.key || index : index}>
          {child}
          {index !== childrenArray.length - 1 && divider}
        </React.Fragment>
      ))}
    </div>
  );
}

export default HStack;
