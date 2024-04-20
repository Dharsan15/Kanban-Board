import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { rest } from 'lodash';
import React from 'react';

function DarkModeIconButton({...rest}: React.ComponentPropsWithoutRef<typeof IconButton>) {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={isDark ? <MoonIcon /> : <SunIcon />}
      aria-label={'dark-mode-toggle'}
      position="absolute" top={0} right={2}
    />
  );
}

export default DarkModeIconButton;