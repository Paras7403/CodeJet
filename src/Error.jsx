// import React from "react";
// import styled from "styled-components";
// import { Button } from "./styles/Button";
// import { NavLink } from "react-router-dom";


// const Error = () => {
//   return (
//     <Wrapper>
//       <img src="../images/error.svg" alt="error" />
//       <NavLink to="/">
//         <Button className="btn"> Go Back</Button>
//       </NavLink>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 9rem 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   .btn {
//     font-size: 1.8rem;
//     margin-top: 3rem;
//   }
// `;

// export default Error;
// import React from 'react';
// import styled from 'styled-components';

// const ErrorContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #f8f8f8;
// `;

// const ErrorMessage = styled.h1`
//   color: #ff0000;
//   font-size: 2rem;
//   margin-bottom: 20px;
// `;

// const ErrorDescription = styled.p`
//   color: #555;
//   font-size: 1rem;
// `;

// const Error = () => {
//   return (
//     <ErrorContainer>
//       <ErrorMessage>Error: Page not found</ErrorMessage>
//       <ErrorDescription>
//         The requested page could not be found. Please check the URL or navigate to another page.
//       </ErrorDescription>
//       {/* You can add more content or styling as needed */}
//     </ErrorContainer>
//   );
// };

// export default Error;

// import React from 'react';
// import styled from 'styled-components';
// import NotFoundImage from './error.svg';
//  // Adjust the image path based on your project structure
// const ErrorContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #f8f8f8;
// `;

// const ErrorImage = styled.img`
//   width: 100%;
//   max-width: 600px;
//   border-radius: 10px;
//   margin-bottom: 20px;
// `;

// const ErrorMessage = styled.h1`
//   color: #ff5722;
//   font-size: 3rem;
//   margin-bottom: 20px;
// `;

// const ErrorDescription = styled.p`
//   color: #555;
//   font-size: 1.2rem;
//   text-align: center;
//   max-width: 600px;
//   margin-bottom: 40px;
// `;

// const Error = () => {
//   return (
//     <ErrorContainer>
//       <ErrorImage src={NotFoundImage} alt="404 Not Found" />
//       {/* <ErrorMessage>Oops! Page not found</ErrorMessage>
//       <ErrorDescription>
//         It seems like you've stumbled upon a page that doesn't exist. Please check the URL or go back to the homepage.
//       </ErrorDescription> */}
//       {/* You can add more content or styling as needed */}
//     </ErrorContainer>
//   );
// };

// export default Error;


import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

import NotFoundImage from './error.svg';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const ErrorImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const GoBackButton = styled(Link)`
  // background-color: #4caf50;
  background-color: rgb(98 84 243);
  // color: white;
  color: rgb(255 255 255);
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(98 84 243);
  }
`;

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorImage src={NotFoundImage} alt="404 Not Found" />
      <GoBackButton to="/">Go Back</GoBackButton>
    </ErrorContainer>
  );
};

export default Error;