import {Theme} from '@theme/theme.type';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputStyleProps {
  theme?: Theme;
  hasError?: boolean;
  inputSize?: InputSize;
}

export interface InputCustomProps {
  labelText?: string;
  errorText?: string | null;
  onDelete?: () => void;
}

export type InputOptionProps = InputStyleProps & InputCustomProps;

export type InputProps = React.ComponentProps<'input'> & InputOptionProps;
