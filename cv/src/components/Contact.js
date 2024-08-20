import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
`;
function Contact() {
  return (
    <StyledSection>
      <h2 styled>Contact Information</h2>
      <p>Email: your.email@example.com</p>
      <p>LinkedIn: your-linkedin-profile</p>
      <p>phone number:</p>
      {/* Add social media icons and links here */}
    </StyledSection>
  );
}

export default Contact;
