import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {cx} from '@emotion/css';

import {Text} from '../Text/Text';
import {useTheme} from '../../theme/DesignProvider';

import {
  inputBoxStyle,
  inputStyle,
  labelTextStyle,
  errorTextStyle,
  inputLayoutStyle,
  labelLayoutStyle,
} from './Input.style';
import {InputProps} from './Input.type';

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    value,
    onChange,
    placeholder,
    autoFocus = false,
    inputSize = 'md',
    labelText,
    errorText = '',
    hasError,
    className,
    ...htmlProps
  }: InputProps,
  ref,
) {
  const {theme} = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState(autoFocus);
  const hasValue = !!value;

  useImperativeHandle(ref, () => inputRef.current!);

  useEffect(() => {
    const handleFocus = () => setHasFocus(true);
    const handleBlur = () => setHasFocus(false);
    const currentRef = inputRef.current;

    currentRef?.addEventListener('focus', handleFocus);
    currentRef?.addEventListener('blur', handleBlur);
    return () => {
      currentRef?.removeEventListener('focus', handleFocus);
      currentRef?.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <div className={cx(inputLayoutStyle, className)}>
      {(labelText || errorText) && (
        <div className={labelLayoutStyle}>
          {labelText && (
            <Text textSize="caption" className={labelTextStyle({theme, hasFocus, hasValue})}>
              {hasFocus || hasValue ? labelText : ''}
            </Text>
          )}
          {errorText && (
            <Text textSize="caption" className={errorTextStyle({theme, hasError, hasFocus})}>
              {errorText}
            </Text>
          )}
        </div>
      )}
      <div className={inputBoxStyle({theme, hasFocus, hasError, inputSize})}>
        <input
          className={inputStyle({theme, hasFocus, hasError})}
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={hasFocus ? placeholder : labelText}
          autoFocus={autoFocus}
          {...htmlProps}
        />
        {/* {onDelete && value && hasFocus && (
          <button
            type="button"
            onClick={onDelete}
            onKeyDown={e => e.key === 'Enter' && onDelete()}
            aria-label="입력 내용 모두 지우기"
          >
            <Icon iconType="inputDelete" />
          </button>
        )} */}
      </div>
    </div>
  );
});

export default Input;
