import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

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

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Error1 = () => {
  const location = useLocation();

  return (
    <ErrorContainer>
      <ErrorImage src={NotFoundImage} alt="404 Not Found" />
      <ErrorMessage>For desktop users only</ErrorMessage>
    </ErrorContainer>
  );
};

export default Error1;
// import React from 'react';
// import styled from 'styled-components';
// import { Link, useLocation } from 'react-router-dom';

// import NotFoundImage from './error.svg';

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

// const GoBackButton = styled(Link)`
//   background-color: rgb(98 84 243);
//   color: rgb(255 255 255);
//   padding: 10px 20px;
//   text-decoration: none;
//   font-size: 1.2rem;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: rgb(98 84 243);
//   }
// `;

// const Error1 = () => {
//   const location = useLocation();
//   const isShowErrorNavbar = !location.pathname.includes('error1');

//   return (
//     <ErrorContainer>
//       {isShowErrorNavbar && (
//         <>
//           {/* Your Navbar component goes here */}
//           <div>Your Navbar content goes here</div>
//         </>
//       )}
//       <ErrorImage src={NotFoundImage} alt="404 Not Found" />
//       {/* <GoBackButton to="/">Go Back</GoBackButton> */}
//     </ErrorContainer>
//   );
// };

// export default Error1;