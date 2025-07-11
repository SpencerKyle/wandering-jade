
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {

      }
    }
  },
  fonts: {
    heading: `'Glass Antiqua'`,
    body: `'Glass Antiqua'`,
    banner: `'Georgia'`
  },
  layerStyles: {
    galleryItem: {
      width: '100%',
      height: '300px',
      position:"relative"
    },
    teamItem: {
      width: '100%',
      height: '400px', 
      position:"relative",
      mb: '10'
    },
    teamName: {
      fontSize: "4xl",
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
    },
    serviceCardHover: {
      _hover:
      {
        transform: 'scale(1.05)'
      }
    }
  }
})
 
export default theme;