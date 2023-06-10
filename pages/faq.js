import { Inter } from 'next/font/google'
import { Box, Text, Heading, Card, CardBody, useMediaQuery, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import Link from 'next/link'

import faq from '../lib/faq.json'

const inter = Inter({ subsets: ['latin'] })

export default function FAQ() {

  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    <Box bgColor='gray.50' p='10'>
    

    {isMobile && (
      <>
      <Heading mb='20' align='center'>Frequently Asked Questions</Heading>
      <Accordion allowToggle>
        {Object.entries(faq).map(([question, answer]) => (
              <AccordionItem m='1' alignContent='center' key={question}>
                <h2>
                  <AccordionButton>
                    <AddIcon boxSize={6} pr='3'/>
                    <Box as='span' flex='1' textAlign='left' key={question} fontWeight='bold'>
                      {question}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} key={answer}>
                  {answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
      </Accordion>
      <Box mt='10' align='center'>
            <Text>If you have any other questions please feel free to reach out via email at <Text as='span' fontWeight='bold'><a href='mailto:wanderingjadebar@gmail.com'>wanderingjadebar@gmail.com</a></Text></Text>
      </Box>

      </>
    )}

    {!isMobile && (
      <Card align='center'>
        <Heading my='10' mx='10'>Frequently Asked Questions</Heading>
          <CardBody>
            <Box>
              {Object.entries(faq).map(([question, answer]) => (
                <Box mx='40' my='4' key={question}>
                  <Heading size='md'>{question}</Heading>
                  <Text>{answer}</Text>
                </Box>
              ))}
            </Box>
            <Box mx='40' my='4' align='center'>
              <Text>If you have any other questions please feel free to reach out via email at <Text as='span' fontWeight='bold'><a href='mailto:wanderingjadebar@gmail.com'>wanderingjadebar@gmail.com</a></Text></Text>
            </Box>
          </CardBody>
      </Card>
      )}
    </Box>
  )
}
