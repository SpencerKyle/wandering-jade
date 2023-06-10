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
                    <Box as='span' flex='1' textAlign='left' fontWeight='bold' key={question}>
                      {question}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} key={answer}>
                  {question === 'How Much Does it Cost To Have Wandering Jade at an Event?' ? (
                    <Text>
                      Pricing Varies for each event depending on # of people, location, and what services you would like provided.
                      The best way to get an exact price is to submit a form and we will get back to you as soon as possible!
                      To receive a quote submit an inquiry{' '}
                      <Text as='span' fontWeight='bold' textDecoration='underline'>
                        <Link href='/form' target="_blank">
                          HERE
                        </Link>
                      </Text>
                      .
                    </Text>
                  ) : (
                    answer
                  )}
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
                  {question === 'How Much Does it Cost To Have Wandering Jade at an Event?' ? (
                    <Text>
                      Pricing Varies for each event depending on # of people, location, and what services you would like provided.
                      The best way to get an exact price is to submit a form and we will get back to you as soon as possible!
                      To receive a quote submit an inquiry{' '}
                      <Text as='span' fontWeight='bold' textDecoration='underline'>
                        <Link href='/form' target="_blank">
                          HERE
                        </Link>
                      </Text>
                      .
                    </Text>
                  ) : (
                    <Text>{answer}</Text>
                  )}
                </Box>
              ))}
            </Box>
            <Box mx='40' p='10' align='center'>
              <Text>If you have any other questions please feel free to reach out via email at <Text as='span' fontWeight='bold'><a href='mailto:wanderingjadebar@gmail.com'>wanderingjadebar@gmail.com</a></Text></Text>
            </Box>
          </CardBody>
      </Card>
      )}
    </Box>
  )
}
