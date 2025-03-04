import {HTMLAttributes} from 'react';

export type FixedBottomCTAProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  direction?: 'row' | 'column';
};
