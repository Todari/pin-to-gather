import {COLORS, Text, TYPOGRAPHY} from '@pin-to-gather/ui';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    textSize: {
      description: '텍스트의 크기를 설정합니다',
      control: {type: 'select'},
      options: Object.keys(TYPOGRAPHY),
    },
    textColor: {
      description: '텍스트의 색상을 설정합니다',
      control: {type: 'select'},
      options: Object.keys(COLORS),
    },
    responsive: {
      description: '반응형 텍스트 여부를 설정합니다',
      control: {type: 'boolean'},
    },
    children: {
      description: '텍스트의 내용을 설정합니다',
      control: {type: 'text'},
    },
  },
  args: {
    textSize: 'body',
    textColor: 'black',
    responsive: false,
    children: '텍스트',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Head: Story = {
  args: {
    textSize: 'head',
    children: '헤드 텍스트',
  },
};

export const Title: Story = {
  args: {
    textSize: 'title',
    children: '타이틀 텍스트',
  },
};

export const SubTitle: Story = {
  args: {
    textSize: 'subTitle',
    children: '서브타이틀 텍스트',
  },
};

export const Body: Story = {
  args: {
    textSize: 'body',
    children: '본문 텍스트',
  },
};

export const BodyBold: Story = {
  args: {
    textSize: 'bodyBold',
    children: '본문 볼드 텍스트',
  },
};

export const SmallBody: Story = {
  args: {
    textSize: 'smallBody',
    children: '작은 본문 텍스트',
  },
};

export const SmallBodyBold: Story = {
  args: {
    textSize: 'smallBodyBold',
    children: '작은 본문 볼드 텍스트',
  },
};

export const Caption: Story = {
  args: {
    textSize: 'caption',
    children: '캡션 텍스트',
  },
};

export const CaptionBold: Story = {
  args: {
    textSize: 'captionBold',
    children: '캡션 볼드 텍스트',
  },
};

export const Tiny: Story = {
  args: {
    textSize: 'tiny',
    children: '타이니 텍스트',
  },
};
