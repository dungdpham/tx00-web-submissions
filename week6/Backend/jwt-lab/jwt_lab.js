const jwt = require('jsonwebtoken');

// Function to create and sign a JWT
function createJWT() {
  const payload = {
    userId: 123,
    username: 'exampleUser',
  };
  const secretKey = 'yourSecretKey'; // Replace with your secret key

  // Sign the JWT with the payload and secret key
  const token = jwt.sign(payload, secretKey);

  console.log('JWT Token:', token);
}

// Call the function to create and sign a JWT
//createJWT();

// Function to decode a JWT
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log('Decoded JWT:', decoded);
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTY5NTcxNjQ3NX0.SQ78lpT50Y3xRlebj-C2s7_HC0XVd3eaV95OlbHcgB4';

// Call the function to decode the JWT
//decodeJWT(jwtToken);

// Function to verify a JWT
function verifyJWT(token) {
  const secretKey = 'yourSecretKey'; // Replace with your secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Failed:', err.message);
    } else {
      console.log('JWT Verified. Decoded:', decoded);
    }
  });
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtTokenToVerify =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTY5NTcxNjQ3NX0.SQ78lpT50Y3xRlebj-C2s7_HC0XVd3eaV95OlbHcgB4';

// Call the function to verify the JWT
verifyJWT(jwtTokenToVerify);

const tokennn = require('crypto').randomBytes(64).toString('hex');
console.log(tokennn);
