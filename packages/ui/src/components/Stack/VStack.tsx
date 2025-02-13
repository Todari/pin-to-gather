/** @jsxImportSource @emotion/react */
import React from 'react';

import {vStackStyle} from './Stack.style';
import {VStackProps} from './Stack.type';

export function VStack({children, gap = 0, align = 'flex-start', divider, p, m, br, b, bg, ...props}: VStackProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div css={vStackStyle({gap, align, p, m, br, b, bg})} {...props}>
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
