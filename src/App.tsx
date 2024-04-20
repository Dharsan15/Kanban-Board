import {} from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './utils/enums';

function App() {

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const Backend = isMobile ? TouchBackend : HTML5Backend; 

  return (
    <main>
      <Heading
        fontSize={{ base: '4xl', sm: '7xl', md: '5xl' }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        mt={4}
      >
        Welcome to Kanban Board
      </Heading>
      <DarkModeIconButton  />
      <DndProvider backend={Backend} options={{ enableMouseEvents: true }}>
        <Container maxWidth="container.lg" px={4} py={10}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.BLOCKED} />
            <Column column={ColumnType.COMPLETED} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;

