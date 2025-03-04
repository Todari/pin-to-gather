import {cx} from '@emotion/css';

import {useTheme} from '../../theme/DesignProvider';
import VStack from '../Stack/VStack';
import HStack from '../Stack/HStack';

import {fixedBottomCTAStyle} from './FixedBottomCTA.style';
import {FixedBottomCTAProps} from './FixedBottomCTA.type';

export const FixedBottomCTA = ({children, direction = 'column', className, ...props}: FixedBottomCTAProps) => {
  const {theme} = useTheme();

  return (
    <>
      {direction === 'column' ? (
        <VStack
          p="1.5rem 1.5rem 2rem"
          gap="1rem"
          bg={theme.colors.white}
          className={cx(fixedBottomCTAStyle, className)}
          {...props}
        >
          {children}
        </VStack>
      ) : (
        <HStack
          p="1.5rem 1.5rem 2rem"
          gap="1rem"
          bg={theme.colors.white}
          className={cx(fixedBottomCTAStyle, className)}
          {...props}
        >
          {children}
        </HStack>
      )}
    </>
  );
};

export default FixedBottomCTA;
