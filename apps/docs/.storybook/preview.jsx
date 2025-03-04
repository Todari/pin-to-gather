import {DesignProvider, GlobalStyle} from '@pin-to-gather/ui';
import {css, Global} from '@emotion/react';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      defaultViewport: {
        styles: {
          width: '375px',
          height: '812px',
        },
      },
    },
    backgrounds: {
      default: 'gray',
      values: [
        {
          name: 'gray',
          value: '#f3f3f3',
        },
      ],
    },
  },
  decorators: [
    Story => {
      return (
        <div>
          <Global
            styles={[
              css`
                @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
                body {
                  font-family: 'Pretendard', sans-serif;
                }
              `,
              GlobalStyle,
            ]}
          />
          <DesignProvider>
            <Story />
          </DesignProvider>
        </div>
      );
    },
  ],
};

export default preview;
