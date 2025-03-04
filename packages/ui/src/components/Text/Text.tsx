import {ElementType} from 'react';
import {cx} from '@emotion/css';

import {useTheme} from '../../theme/DesignProvider';

import {TextProps} from './Text.type';
import {textStyles} from './Text.style';

export const Text = ({
  textSize = 'body',
  children,
  textColor = 'black',
  responsive = false,
  className,
  ...props
}: TextProps) => {
  const {theme} = useTheme();

  let TagComponent: ElementType = 'p';

  if (textSize === 'head') TagComponent = 'h1';
  else if (textSize === 'title') TagComponent = 'h2';
  else if (textSize === 'subTitle') TagComponent = 'h3';
  else if (textSize === 'bodyBold' || textSize === 'body') TagComponent = 'h4';

  return (
    <TagComponent className={cx(textStyles({textSize, textColor, theme, responsive}), className)} {...props}>
      {children}
    </TagComponent>
  );
};
