import React from "react";
import { StyledLink } from "../Button/style.jsx";
import {
  FooterWrapper,
  Container,
  ContactContainer,
  GithubContainer,
  GithubIcon,
} from "./style.jsx";
let currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContactContainer>
          © {currentYear} |
          <StyledLink href="https://github.com/richard96292/impensa/discussions">
            Contact
          </StyledLink>
        </ContactContainer>
        <GithubContainer>
          <StyledLink href="https://github.com/richard96292/impensa">
            <GithubIcon className="fab fa-github" />
          </StyledLink>
        </GithubContainer>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
