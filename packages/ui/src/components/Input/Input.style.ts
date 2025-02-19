import {commonTransition, errorTextAnimationStyle, labelTextAnimationStyle} from '@components/style/animation';
import {css} from '@emotion/react';
import {InputSize, Theme} from '@pin-to-gather/ui';

export const inputLayoutStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
  width: '100%',
});

export const labelLayoutStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  paddingInline: '0.5rem',
  margin: '0 0 0.375rem 0',
});

interface InputStyleProps {
  hasFocus: boolean;
  theme: Theme;
  hasError?: boolean;
  hasValue?: boolean;
  inputSize?: InputSize;
}

const borderStyle = ({theme, hasError, hasFocus}: InputStyleProps) =>
  css({
    boxShadow: hasError
      ? `0 0 0 1px ${theme.colors.error} inset`
      : hasFocus
        ? `0 0 0 1px ${theme.colors.primary} inset`
        : '',
  });

export const labelTextStyle = ({theme, hasError, hasFocus, hasValue}: InputStyleProps) =>
  css([
    {
      height: '1.125rem',
      color: hasError ? theme.colors.error : theme.colors.primary,
    },
    !hasFocus &&
      !hasValue && {
        transform: 'translate(0.25rem, 1rem)',
        scale: '1.5',
        opacity: '0',
      },
    labelTextAnimationStyle(hasFocus, (hasValue = false)),
  ]);

export const errorTextStyle = ({theme, hasError}: InputStyleProps) =>
  css([
    {
      height: '1.125rem',
      color: theme.colors.error,
    },
    errorTextAnimationStyle(hasError ?? false),
  ]);

export const inputBoxStyle = ({hasFocus, theme, hasError, inputSize = 'md'}: InputStyleProps) => {
  const sizeStyle = {
    sm: css({
      padding: '0.5rem 0.75rem',
      borderRadius: '0.375rem',
      fontSize: '0.75rem',
      fontWeight: '600',
    }),
    md: css({
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: '700',
    }),
    lg: css({
      padding: '1rem 1.25rem',
      borderRadius: '0.625rem',
      fontSize: '1.25rem',
      fontWeight: '700',
    }),
  };

  return css([
    {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1rem',
      background: theme.colors.grayContainer,
      boxSizing: 'border-box',
    },
    sizeStyle[inputSize],
    borderStyle({hasFocus, theme, hasError}),
    commonTransition,
  ]);
};

export const inputStyle = ({theme}: InputStyleProps) =>
  css([
    {
      display: 'flex',
      width: '100%',
      color: theme.colors.black,

      '&::placeholder': {
        color: theme.colors.gray,
      },
    },
  ]);
