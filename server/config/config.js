

// const config = {
//   development: {
//     port: process.env.PORT || 5002,
//     mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/messaging-app',
//     jwtSecret: process.env.JWT_SECRET || 'secret_key',
//     corsOptions: {
//       origin: ['http://localhost:5173', 'http://localhost:5183'], // Allow both ports
//       methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add PUT and DELETE
//       allowedHeaders: ['Content-Type', 'Authorization']
//     }
//   },
//   production: {
//     port: process.env.PORT || 5002,
//     mongoURI: process.env.MONGO_URI,
//     jwtSecret: process.env.JWT_SECRET,
//     corsOptions: {
//       origin: process.env.CLIENT_URL, // Use environment variable for production
//       methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add PUT and DELETE
//       allowedHeaders: ['Content-Type', 'Authorization']
//     }
//   }
// };

// const env = process.env.NODE_ENV || 'development';
// module.exports = config[env];

const config = {
  development: {
    port: process.env.PORT || 5002,
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/messaging-app',
    jwtSecret: process.env.JWT_SECRET || 'secret_key',
    corsOptions: {
      origin: process.env.ORIGIN_URL || '*', // Use ORIGIN_URL or allow all in development
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Standard methods
      allowedHeaders: ['Content-Type', 'Authorization']
    }
  },
  production: {
    port: process.env.PORT || 5002,
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    corsOptions: {
      origin: process.env.ORIGIN_URL || '*', // Use ORIGIN_URL or allow all as fallback
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Standard methods
      allowedHeaders: ['Content-Type', 'Authorization']
    }
  }
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];