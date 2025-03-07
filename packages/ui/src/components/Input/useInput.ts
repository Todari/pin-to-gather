import {RefObject, useEffect, useState} from 'react';

interface UseInputProps<T> {
  propsValue: T;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
  autoFocus?: boolean;
}

export const useInput = <T extends string | number>({
  propsValue,
  onChange,
  onBlur,
  onFocus,
  autoFocus,
  inputRef,
}: UseInputProps<T>) => {
  const [value, setValue] = useState<T>(propsValue);
  const [hasFocus, setHasFocus] = useState(inputRef.current === document.activeElement);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
      setHasFocus(true);
    }
  }, [autoFocus, inputRef]);

  useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setValue('' as T);
    if (onChange) {
      const syntheticEvent = new Event('change', {bubbles: true}) as unknown as React.ChangeEvent<HTMLInputElement>;
      Object.defineProperty(syntheticEvent, 'target', {value: {value: ''}});
      onChange(syntheticEvent);
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
    if (onChange) {
      onChange(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;

    if (event.key === 'Enter' || event.key === 'Escape') {
      setHasFocus(false);
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  return {value, handleChange, hasFocus, handleClickDelete, handleBlur, handleFocus, handleKeyDown};
};
