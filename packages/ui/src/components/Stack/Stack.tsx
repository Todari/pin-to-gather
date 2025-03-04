import React from 'react';
import {cx} from '@emotion/css';
import {StackProps} from './Stack.type';
import {stackStyle} from './Stack.style';

export function Stack({
  children,
  gap = 0,
  direction = 'column',
  justify = 'center',
  align = 'center',
  w = 'auto',
  h = 'auto',
  p,
  m,
  br,
  b,
  bg,
  divider,
  className,
  ...props
}: StackProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={cx(stackStyle({gap, direction, justify, align, p, m, br, b, bg, w, h}), className)} {...props}>
      {childrenArray.map((child, index) => {
        const key = React.isValidElement(child) ? child.key || index : index;
        return (
          <>
            <React.Fragment key={key}>{child}</React.Fragment>
            {index !== childrenArray.length - 1 && divider}
          </>
        );
      })}
    </div>
  );
}

export default Stack;
