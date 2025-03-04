import React from 'react';
import {cx} from '@emotion/css';

import {vStackStyle} from './Stack.style';
import {VStackProps} from './Stack.type';

export function VStack({
  children,
  gap = 0,
  align = 'flex-start',
  divider,
  p,
  m,
  br,
  b,
  bg,
  className,
  ...props
}: VStackProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={cx(vStackStyle({gap, align, p, m, br, b, bg}), className)} {...props}>
      {childrenArray.map((child, index) => (
        <React.Fragment key={React.isValidElement(child) ? child.key || index : index}>
          {child}
          {index !== childrenArray.length - 1 && divider}
        </React.Fragment>
      ))}
    </div>
  );
}

export default VStack;
