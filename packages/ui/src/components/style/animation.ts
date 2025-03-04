import {css} from '@emotion/css';

export const commonTransition = css`
  transition: 0.2s;
  transition-timing-function: cubic-bezier(0.7, 0.62, 0.62, 1.16);
`;

export const labelTextAnimationStyle = (hasFocus: boolean, hasValue: boolean) => css`
  opacity: ${hasFocus || hasValue ? '1' : '0'};
  ${commonTransition}
`;

export const errorTextAnimationStyle = (hasError: boolean) => css`
  opacity: ${hasError ? '1' : '0'};
  ${commonTransition}
`;
