import { Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="xl" mb={4}>
        About
      </Heading>
      <Text fontSize="lg" textAlign="center">
        This is the About page.
      </Text>
    </Container>
  );
};

export default About;
