import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  VStack,
  Flex,
  useColorMode,
  Heading,
  Center,
  Container,
  Spacer,
  Icon,
  Button,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  MdMenu
} from 'react-icons/md'
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Container margin={0}>
        <Flex p={3} w={600} maxW='95%' margin='0 auto'>
          <Heading justifySelf={'flex-start'}>Rykov Dev.</Heading>
          <Spacer />
          <Box>
            <Menu>
              <MenuButton as={IconButton} icon={<MdMenu margin='0 auto' w={11} h={11} />} w={10} h={10} p={0} />
              <MenuList>
                <MenuItem>
                  Обо мне
                </MenuItem>
                <MenuItem>
                  Технологии
                </MenuItem>
                <MenuItem>
                  Работы
                </MenuItem>
                <MenuItem>
                  Контакты
                </MenuItem>
              </MenuList>
            </Menu>
            <ColorModeSwitcher />
          </Box>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

const AboutMe = () => {
  return <Container>

  </Container>
}

export default App;
