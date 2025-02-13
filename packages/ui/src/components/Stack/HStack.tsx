/** @jsxImportSource @emotion/react */
import React from 'react';

import {hStackStyle} from './Stack.style';
import {HStackProps} from './Stack.type';

export function HStack({children, gap = 0, justify = 'flex-start', divider, p, m, br, b, bg, ...props}: HStackProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div css={hStackStyle({gap, justify, p, m, br, b, bg})} {...props}>
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
