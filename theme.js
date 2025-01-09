
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        textTransform: 'uppercase'
      }
    }
  },
  fonts: {
    heading: `'Oswald'`,
    body: `'Oswald'`,
    banner: `'Georgia'`
  },
  textStyles: {
    // serviceItem: {
    //   fontWeight: 'bold',
    // }
  },
  layerStyles: {
    galleryItem: {
      width: '100%',
      height: '300px',
      position:"relative"
    },
    teamItem: {
      width: '100%',
      height: ['50vh', '100vh' ,'100vh'], 
      position:"relative",
      mb: '10'
    },
    customBox: {
      position: 'absolute',
      borderRadius: '10px',
      bottom: 0,
      width: '70%',
      height: 'auto',
      backgroundColor: 'white',
      textAlign: 'center',
      padding: '20px',
      transform: 'translateY(50%)',
      boxShadow: 'md',
      _hover: {
        bg: 'gray.50'
      }
    },
    serviceCard: {
      width: ['80%', null, null, null, '90%'],
      mb: '30px',
      alignItems: 'center'
    }
  }
})
 
export default theme;