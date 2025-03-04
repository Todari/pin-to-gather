import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {cx} from '@emotion/css';

import {useTheme} from '../../theme/DesignProvider';

import {buttonContentStyle, buttonStyle} from './Button.style';
import {ButtonProps} from './Button.type';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variants = 'primary',
    buttonSize = 'md',
    display = 'block',
    disabled,
    children,
    isLoading,
    className,
    ...htmlProps
  }: ButtonProps,
  ref?: React.Ref<HTMLButtonElement>,
) {
  const {theme} = useTheme();

  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => buttonRef.current!);

  return (
    <button
      className={cx(buttonStyle({variants, buttonSize, display, theme}), className)}
      ref={buttonRef}
      {...htmlProps}
      disabled={isLoading ? true : disabled}
      aria-busy={isLoading}
      aria-label={isLoading ? '로딩 중' : htmlProps['aria-label']}
      //TODO: (@Todari) loading styling
    >
      <span className={buttonContentStyle}>{children}</span>
    </button>
  );
});

export default Button;
