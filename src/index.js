import { ColorModeScript, ChakraProvider,theme } from '@chakra-ui/react';
import ColorModeSwitcher from "./ColorModeSwitcher"
import * as ReactDOM from 'react-dom/client';



import App from './components/App';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
  
  <ColorModeScript/>
  <ChakraProvider theme={theme}>
        <ColorModeSwitcher/>
    <App/>

  </ChakraProvider>
  
  </>
 
);


