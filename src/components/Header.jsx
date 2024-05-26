import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex align="center">
        <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.600" }} _activeLink={{ bg: "teal.700" }}>
          Home
        </Link>
        <Link as={NavLink} to="/about" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.600" }} _activeLink={{ bg: "teal.700" }}>
          About
        </Link>
        <Link as={NavLink} to="/contact" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.600" }} _activeLink={{ bg: "teal.700" }}>
          Contact
        </Link>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Header;
