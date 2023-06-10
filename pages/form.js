import { sendContactForm } from "/lib/api"
import { Container, Heading, FormControl, FormLabel, Input, FormErrorMessage, Button, Select, Checkbox, List, ListItem, Textarea, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Box, Flex, Card, Text } from "@chakra-ui/react"
import { useState } from "react"

import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';


const initValues = {
    name: "",
    email: "",
    phone: "",
    date: "",
    address: "",
    event: "",
    count: "",
    package: "",
    addons: [],
    social: "",
    notes: "",
}

const addons = ["Koozies", "Custom Koozies (name and date)", "Custom Drink Menu Planning", "Bar consultation/Drink Tasting (prior to event)", "Bartender Service", "Custom Drinkware (name and date)"]
const socials = ["Facebook", "Instagram", "TikTok", "Google", "Yelp", "Repeat Client", "Client Referral"]
const packages = ["Take it Easy", "Perfect Match", "Going All Out"]
const events = ["Wedding", "Corporate", "Party", "Event", "Other"]

const initState = {values:initValues}

export default function Book() {

    const [state, setState] = useState(initState)
    const [touched, setTouched] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { values, isLoading, error } = state

    const onBlur = ({ target }) => setTouched((prev) => ({...prev, 
        [target.name]:true
    }))

    const onFocus = ({ target }) => setTouched((prev) => ({...prev,
        [target.name]:true
    }))

    //Modal
    const { isOpen, onOpen } = useDisclosure()

    const onClose = () => {
        setIsSubmitted(false);
    };
      
    //Default input and checkbox handler
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
    
    // Phone Input Handlers
    const [phoneValue, setPhoneValue] = useState(values.phone)

        const handlePhoneChange = (value) => {
            setPhoneValue(value);
            setState((prevState) => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    phone: value,
                },
            }))
        };
    
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
    // bgColor='#8bf795'
    
    return (
        <Box p='10' bgColor='gray.50'>
            <Card>
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

                <FormControl mb={3} isRequired isInvalid={touched.phone && !values.phone}>
                    <FormLabel>Phone</FormLabel>
                    <PhoneInput
                        defaultCountry="US"
                        maxLength="14"
                        name='phone'
                        errorBorderColor="red.300"
                        placeholder="(801) 555-555"
                        inputComponent={Input}
                        value={phoneValue}
                        onChange={handlePhoneChange}
                        onBlur={onBlur}
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

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

                <FormControl mb={3} isRequired>
                    <FormLabel>What type of event is this</FormLabel>
                    <Select name="event" placeholder="Select an event" isInvalid={touched.event && !values.event} errorBorderColor="red.300" value={state.values.event} onChange={handleChange} onBlur={onBlur} onFocus={onFocus}>
                        {events.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                <FormControl mb={3} isRequired isInvalid={touched.count && !values.count}>
                    <FormLabel>Estimated Guest count</FormLabel>
                            <Input type="text" name="count" value={values.count} onChange={handleChange} onBlur={onBlur}>
                            </Input>
                        <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                <FormControl mb={3} isRequired>
                    <FormLabel>Which <a href="">Package</a> do you want?</FormLabel>
                    <Select name="package" placeholder="Select a package" isInvalid={touched.package && !values.package} errorBorderColor="red.300" value={state.values.package} onChange={handleChange} onBlur={onBlur} onFocus={onFocus} >
                        {packages.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                <FormControl mb={3}>
                    <FormLabel>Please select any Addons</FormLabel>
                    <List>
                        {addons.map((option) => (
                            <ListItem key={option}>
                                <Checkbox
                                key={option}
                                value={option}
                                p='1'
                                onChange={handleChange}
                                >
                                {option}
                                </Checkbox>
                            </ListItem>
                        ))}
                    </List>
                </FormControl>

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

                <FormControl mb={3}>
                    <FormLabel>Any other details you'd like us to know?</FormLabel>
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
        )
}

