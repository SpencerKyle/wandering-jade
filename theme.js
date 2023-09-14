
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Comfortaa'`,
    body: `'Comfortaa'`,
    banner: `'Georgia'`
  },
  layerStyles: {
    galleryItem: {
      width: ['100%', '50%', '25%'],
      height: '300px', 
      mb: '7',
      position:"relative"
    },
    teamItem: {
      width: '100%',
      height: ['50vh', '100vh' ,'100vh'], 
      position:"relative"
    },
    teamName: {
      mb: '10',
      mt: '2'
    }
  }
})
 
export default theme;