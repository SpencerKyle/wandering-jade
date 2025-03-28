import { sendContactForm } from "/lib/api"
import { Container, Heading, FormControl, FormLabel, Input, FormErrorMessage, Button, Select, Checkbox, List, ListItem, Textarea, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Box, Flex, Card, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import Head from "next/head";

const initValues = {
    name: "",
    confirmEmail: "",
    email: "",
    phone: "",
    date: "",
    address: "",
    event: "",
    weddingDetails: "",
    count: "",
    package: "Take it Easy",
    addons: [],
    social: "",
    notes: "",
}

const socials = ["Facebook", "Instagram", "TikTok", "Google", "Yelp", "Repeat Client", "Client Referral"]
const packages = ["Take it Easy", "Perfect Match", "Going All Out"]
const events = ["Wedding", "Corporate", "Party", "Event", "Other"]

import addonData from '../lib/addons.json'

const initState = {values:initValues}

export default function Book() {

    const [state, setState] = useState(initState)
    const [touched, setTouched] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { values, isLoading, error } = state

    const router = useRouter();
    const { package: selectedPackage } = router.query

    useEffect(() => {
        if (selectedPackage) {
            setState(prevState => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    package: selectedPackage, // Update the package value with the URL query
                },
            }));
        }
    }, [selectedPackage]);

    // onBlur, onFocus handler
    const onBlur = ({ target }) => setTouched((prev) => ({...prev, 
        [target.name]:true
    }))

    const onFocus = ({ target }) => setTouched((prev) => ({...prev,
        [target.name]:true
    }))

 
    // Input change handler
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        
        if (type === 'checkbox') {
            setState((prevState) => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    addons: checked
                    ? [...prevState.values.addons, value]
                    : prevState.values.addons.filter((addon) => addon !== value),
                },
            }));
        } else if (name === 'phone') {
            function formatPhone(phoneNumber) {
                const cleanNum = phoneNumber.toString().replace(/\D/g, '');
                const match = cleanNum.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);
                if (match) {
                  return '(' + match[1] + ') ' + (match[2] ? match[2] + "-" : "") + match[3];
                }
                return cleanNum;
              }

            setState((prevState) => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    [name]: formatPhone(value),
                },
            }));
        } else {
            setState((prevState) => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    [name]: value,
                },
            }));
        }
    };

    // Submit    
    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true
        }));

        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            setIsSubmitted(true)

        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: true,
                error:error.message,
            }));
        }
    };

    //Success Modal
    const { isOpen, onOpen } = useDisclosure()

    const onClose = () => {
        setIsSubmitted(false);
    };
      
    return (
        <>
        <Head>
            <title>Wandering Jade | Quote</title>
        </Head>

        <Box p='10' bgColor='gray.50'>
            <Card mx='auto' width={['100%', null, '50%']}> 
            <Container maxW="450px" mt={12}> 
            
             <Modal isOpen={isSubmitted} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent >
                        <ModalCloseButton />
                        <ModalBody m='7' align='center'>
                            <Flex direction='column'>
                                <Heading size='lg' align='center' mb='5'>Awesome!</Heading>
                                <Box align='center' mb='7'>Thank you so much for submitting a quote! We will get back to you as soon as possible.</Box>
                                <Button bgColor='#8bf795' _hover={{ bgColor:'#8bf795'}} onClick={onClose}>Ok</Button>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal>

                {/* - - - - - - Name - - - - - - */}
                <FormControl mb={3} isRequired isInvalid={touched.name && !values.name}>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                        type='text'
                        name='name'
                        errorBorderColor="red.300"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                {/* - - - - - - Email - - - - - - */}
                <FormControl mb={3} isRequired isInvalid={touched.email && !values.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        name='email'
                        errorBorderColor="red.300"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                <FormControl mb={3} isRequired isInvalid={touched.confirmEmail && values.confirmEmail != values.email}>
                    <FormLabel>Confirm Email</FormLabel>
                    <Input
                        type='confirmEmail'
                        name='confirmEmail'
                        errorBorderColor="red.300"
                        value={values.confirmEmail}
                        onChange={handleChange}
                        onBlur={onBlur}
                        />
                        <FormErrorMessage>Emails do not match</FormErrorMessage>
                </FormControl>

                {/* - - - - - - Phone - - - - - - */}
                <FormControl mb={3} isRequired isInvalid={touched.phone && !values.phone}>
                    <FormLabel>Phone</FormLabel>
                    <Input
                        type='text'
                        name='phone'
                        errorBorderColor="red.300"
                        placeholder="(801) 555-555"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={onBlur}
                        maxLength="14"
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                {/* - - - - - - Date - - - - - - */}
                <FormControl mb={3} isRequired isInvalid={touched.date && !values.date}>
                    <FormLabel>Event Date</FormLabel>
                    <Input
                        type='date'
                        name='date'
                        errorBorderColor="red.300"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                {/* - - - - - - Address - - - - - - */}
                <FormControl mb={3} isRequired isInvalid={touched.address && !values.address}>
                    <FormLabel>Event Address</FormLabel>
                    <Input
                        type='text'
                        name='address'
                        errorBorderColor="red.300"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                {/* - - - - - - Type - - - - - - */}
                <FormControl mb={3} isRequired>
                    <FormLabel>What type of event is this</FormLabel>
                    <Select 
                        name="event" 
                        placeholder="Select an event" 
                        isInvalid={touched.event && !values.event} 
                        errorBorderColor="red.300" 
                        value={state.values.event} 
                        onChange={handleChange} 
                        onBlur={onBlur}
                        onFocus={onFocus}>

                        {events.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                {/* - - - - - - Wedding Coordinator - - - - - - */}
                {values.event === "Wedding" && (
                    <FormControl mb={3}>
                        <FormLabel>Day of Wedding Coordinator Contact Info</FormLabel>
                        <Input
                            type="text"
                            name="weddingDetails"
                            placeholder="Name and Phone"
                            value={values.weddingDetails}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                    </FormControl>
                )}

                {/* - - - - - - Guest Count - - - - - - */}
                <FormControl mb={3} isRequired isInvalid={touched.count && !values.count}>
                    <FormLabel>Estimated Guest count</FormLabel>
                            <Input 
                                type="text" 
                                name="count" 
                                value={values.count} 
                                onChange={handleChange} 
                                onBlur={onBlur}>
                            </Input>
                        <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                {/* - - - - - - Package - - - - - - */}
                <FormControl mb={3} isRequired>
                    <FormLabel>Which <a href="">Package</a> do you want?</FormLabel>
                    <Select 
                        name="package" 
                        placeholder="Select a package" 
                        isInvalid={touched.package && !values.package} 
                        errorBorderColor="red.300" 
                        value={values.package} 
                        onChange={handleChange} 
                        onBlur={onBlur} 
                        onFocus={onFocus}>

                        {packages.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                {/* - - - - - - Addons - - - - - - */}
                <FormControl mb={3}>
                    <FormLabel>Select any addons you would like to include</FormLabel>
                    <List>
                            {Object.entries(addonData).map(([key, [addonItem, addonPrice]]) => (
                                <ListItem key={key}>
                                    <Checkbox
                                        key={key}
                                        value={addonItem}
                                        p='1'
                                        onChange={handleChange}
                                    >
                                        <div>{addonItem} : <strong>{addonPrice}</strong></div>
                                    </Checkbox>
                                </ListItem>
                            ))}
                    </List>
                </FormControl>


                {/* - - - - - - Socials - - - - - - */}
                <FormControl mb={3}>
                    <FormLabel>Where did you hear about us?</FormLabel>
                    <Select name="social" placeholder="Select an option" isInvalid={touched.social && !values.social} value={state.values.social} onChange={handleChange} >
                        {socials.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                {/* - - - - - - Etc - - - - - - */}
                <FormControl mb={3}>
                    <FormLabel>Any other details you&apos;d like us to know?</FormLabel>
                    <Textarea  type="text" name="notes" value={values.notes} onChange={handleChange}/>
                </FormControl>

                <Box align='center' my='10'>
                    <Button
                        variant="outline"
                        isLoading={isLoading}
                        isDisabled={!values.name || !values.email || !values.phone || !values.date || !values.address || !values.event || !values.package} 
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                </Box>

            </Container>
            </Card>
        </Box>
        </>
        )
}

