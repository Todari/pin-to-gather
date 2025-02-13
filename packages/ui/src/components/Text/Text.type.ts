import {Theme} from '@theme/theme.type';
import {ColorKeys} from '@token/colors';

import TYPOGRAPHY from '@token/typography';

export type TextSize = keyof typeof TYPOGRAPHY;

export interface TextStyleProps {
  size?: TextSize;
  textColor?: ColorKeys;
  responsive?: boolean;
}

export interface TextStylePropsWithTheme extends TextStyleProps {
  theme: Theme;
}

export type TextOptionProps = TextStyleProps;

export type TextProps = React.ComponentProps<'p'> & TextOptionProps;
