import {commonTransition} from '@components/style/animation';
import {css} from '@emotion/react';
import {Typography, TYPOGRAPHY} from '@token/typography';

import type {TextStylePropsWithTheme} from './Text.type';
import {ColorTokens} from '@token/colors';

export const textStyles = ({textSize, textColor, theme, responsive}: Required<TextStylePropsWithTheme>) => {
  const responsiveStyle = (baseStyle: Typography) => {
    if (responsive) {
      return css`
        ${baseStyle}
        @media (min-width: 1024px) {
          font-size: calc(${baseStyle.fontSize} * 1.25);
        }
        @media (min-width: 1600px) {
          font-size: calc(${baseStyle.fontSize} * 1.5);
        }
      `;
    }
    return css(baseStyle);
  };

  const style = {
    head: responsiveStyle(TYPOGRAPHY.head),
    title: responsiveStyle(TYPOGRAPHY.title),
    subTitle: responsiveStyle(TYPOGRAPHY.subTitle),
    bodyBold: responsiveStyle(TYPOGRAPHY.bodyBold),
    body: responsiveStyle(TYPOGRAPHY.body),
    smallBodyBold: responsiveStyle(TYPOGRAPHY.smallBodyBold),
    smallBody: responsiveStyle(TYPOGRAPHY.smallBody),
    captionBold: responsiveStyle(TYPOGRAPHY.captionBold),
    caption: responsiveStyle(TYPOGRAPHY.caption),
    tiny: responsiveStyle(TYPOGRAPHY.tiny),
  };

  const colorStyle = css({color: theme.colors[textColor as keyof ColorTokens]});

  const baseStyle = css({
    whiteSpace: 'pre-line',
    commonTransition,
  });

  return [style[textSize as keyof typeof style], colorStyle, baseStyle];
};
