import { Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="xl" mb={4}>
        Contact
      </Heading>
      <Text fontSize="lg" textAlign="center">
        This is the Contact page.
      </Text>
    </Container>
  );
};

export default Contact;
