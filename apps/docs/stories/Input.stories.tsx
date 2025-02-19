import {Input, InputProps} from '@pin-to-gather/ui';

import type {Meta, StoryObj} from '@storybook/react';
import { useState } from 'react';

const ControlledInput = (args: InputProps) => {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={(e) => setValue(e.target.value)} {...args} />;
};

const meta = {
  title: 'Components/Input',
  component: ControlledInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      description: '입력 필드의 값을 설정합니다',
      control: {type: 'text'},
    },
    onChange: {
      description: '입력값이 변경될 때 호출되는 함수입니다',
    },
    inputSize: {
      description: '입력 필드의 크기를 설정합니다',
      control: {type: 'select', options: ['sm', 'md', 'lg']},
    },
    labelText: {
      description: '입력 필드의 라벨을 설정합니다',
      control: {type: 'text'},
    },
    errorText: {
      description: '에러 메시지를 설정합니다',
      control: {type: 'text'},
    },
    placeholder: {
      description: '입력 필드의 플레이스홀더를 설정합니다',
      control: {type: 'text'},
    },
    hasError: {
      description: '에러 상태를 설정합니다',
      control: {type: 'boolean'},
    },
    autoFocus: {
      description: '자동 포커스 여부를 설정합니다',
      control: {type: 'boolean'},
    }
  },
  args: {
    labelText: '라벨',
    placeholder: '내용을 입력해주세요',
    autoFocus: false,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelText: '기본 입력',
    placeholder: '내용을 입력해주세요',
  },
};

export const WithError: Story = {
  args: {
    value: '잘못된 값',
    labelText: '에러 상태',
    errorText: '에러가 발생했습니다',
    hasError: true,
  },
};

export const Small: Story = {
  args: {
    inputSize: 'sm',
  },
};

export const Medium: Story = {
  args: {
    inputSize: 'md',
  },
};

export const Large: Story = {
  args: {
    inputSize: 'lg',
  },
};