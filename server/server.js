

// // // require('dotenv').config();
// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // const http = require('http');
// // // const { Server } = require('socket.io');
// // // const authRoutes = require('./routes/auth');
// // // const userRoutes = require('./routes/user');
// // // const User = require('./models/User');
// // // const config = require('./config/config');
// // // const jwt = require('jsonwebtoken'); // Add JWT for authentication

// // // const app = express();
// // // const server = http.createServer(app);
// // // const io = new Server(server, {
// // //   cors: config.corsOptions
// // // });

// // // app.use(cors(config.corsOptions));
// // // app.use(express.json());
// // // app.use('/api/auth', authRoutes);
// // // app.use('/api/users', userRoutes);

// // // mongoose.connect(config.mongoURI)
// // //   .then(() => {
// // //     console.log('Connected to MongoDB');
// // //   })
// // //   .catch(err => {
// // //     console.error('MongoDB connection error:', err);
// // //   });

// // // // Map to store user-socket mappings
// // // const userSockets = new Map();

// // // io.use((socket, next) => {
// // //   // Authenticate Socket.IO connection using JWT
// // //   const token = socket.handshake.auth.token;
// // //   if (!token) {
// // //     return next(new Error('Authentication error: No token provided'));
// // //   }

// // //   try {
// // //     const decoded = jwt.verify(token, config.jwtSecret);
// // //     socket.userId = decoded.id; // Store user ID in socket for later use
// // //     next();
// // //   } catch (error) {
// // //     return next(new Error('Authentication error: Invalid token'));
// // //   }
// // // });

// // // io.on('connection', (socket) => {
// // //   console.log('Authenticated user connected:', socket.id, 'User ID:', socket.userId);

// // //   socket.on('user-online', async () => {
// // //     try {
// // //       const userId = socket.userId; // Use the authenticated userId from the socket
// // //       if (userId) {
// // //         await User.findByIdAndUpdate(userId, { online: true });
// // //         userSockets.set(userId, socket.id);
// // //         io.emit('status-update', { userId, online: true });
// // //         console.log(`User ${userId} is now online (Socket ID: ${socket.id})`);
// // //       } else {
// // //         console.error('No userId found for socket:', socket.id);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error updating user online status:', error);
// // //     }
// // //   });

// // //   socket.on('send-message', async (message) => {
// // //     try {
// // //       const senderId = socket.userId; // Get sender from authenticated socket
// // //       if (!senderId) {
// // //         console.error('No sender ID found for socket:', socket.id);
// // //         return;
// // //       }

// // //       // Ensure message has sender and receiver
// // //       const fullMessage = { ...message, sender: senderId };
// // //       const receiverSocketId = userSockets.get(message.receiver);
// // //       if (receiverSocketId) {
// // //         io.to(receiverSocketId).emit('receive-message', fullMessage);
// // //         console.log(`Message sent to receiver ${message.receiver} (Socket ID: ${receiverSocketId})`);
// // //       } else {
// // //         console.log(`Receiver ${message.receiver} is offline or not connected. Message stored in MongoDB.`);
// // //       }
// // //       io.to(socket.id).emit('receive-message', fullMessage); // Feedback to sender
// // //     } catch (error) {
// // //       console.error('Error sending message:', error);
// // //     }
// // //   });

// // //   socket.on('disconnect', async () => {
// // //     try {
// // //       const userId = socket.userId;
// // //       if (userId) {
// // //         await User.findByIdAndUpdate(userId, { online: false });
// // //         userSockets.delete(userId);
// // //         io.emit('status-update', { userId, online: false });
// // //         console.log(`User ${userId} disconnected and marked offline`);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error handling disconnect:', error);
// // //     }
// // //   });
// // // });

// // // server.listen(config.port, () => {
// // //   console.log(`Server running on port ${config.port}`);
// // // });



// // require('dotenv').config();
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const http = require('http');
// // const { Server } = require('socket.io');
// // const authRoutes = require('./routes/auth');
// // const userRoutes = require('./routes/user');
// // const User = require('./models/User');
// // const config = require('./config/config');
// // const jwt = require('jsonwebtoken'); // Add JWT for authentication

// // const app = express();
// // const server = http.createServer(app);
// // const io = new Server(server, {
// //   cors: config.corsOptions
// // });

// // app.use(cors());
// // app.use(express.json());
// // app.use('/api/auth', authRoutes);
// // app.use('/api/users', userRoutes);

// // mongoose.connect(config.mongoURI)
// //   .then(() => {
// //     console.log('Connected to MongoDB');
// //   })
// //   .catch(err => {
// //     console.error('MongoDB connection error:', err);
// //   });

// // // Map to store user-socket mappings
// // const userSockets = new Map();

// // io.use((socket, next) => {
// //   // Authenticate Socket.IO connection using JWT
// //   const token = socket.handshake.auth.token;
// //   if (!token) {
// //     return next(new Error('Authentication error: No token provided'));
// //   }

// //   try {
// //     const decoded = jwt.verify(token, config.jwtSecret);
// //     socket.userId = decoded.id; // Store user ID in socket for later use
// //     next();
// //   } catch (error) {
// //     return next(new Error('Authentication error: Invalid token'));
// //   }
// // });

// // io.on('connection', (socket) => {
// //   console.log('Authenticated user connected:', socket.id, 'User ID:', socket.userId);

// //   socket.on('user-online', async () => {
// //     try {
// //       const userId = socket.userId; // Use the authenticated userId from the socket
// //       if (userId) {
// //         await User.findByIdAndUpdate(userId, { online: true });
// //         userSockets.set(userId, socket.id);
// //         io.emit('status-update', { userId, online: true });
// //         console.log(`User ${userId} is now online (Socket ID: ${socket.id})`);
// //       } else {
// //         console.error('No userId found for socket:', socket.id);
// //       }
// //     } catch (error) {
// //       console.error('Error updating user online status:', error);
// //     }
// //   });

// //   socket.on('send-message', async (message) => {
// //     try {
// //       const senderId = socket.userId; // Get sender from authenticated socket
// //       if (!senderId) {
// //         console.error('No sender ID found for socket:', socket.id);
// //         return;
// //       }

// //       // Ensure message has sender and receiver
// //       const fullMessage = { ...message, sender: senderId };
// //       const receiverSocketId = userSockets.get(message.receiver);
// //       if (receiverSocketId) {
// //         io.to(receiverSocketId).emit('receive-message', fullMessage);
// //         console.log(`Message sent to receiver ${message.receiver} (Socket ID: ${receiverSocketId})`);
// //       } else {
// //         console.log(`Receiver ${message.receiver} is offline or not connected. Message stored in MongoDB.`);
// //       }
// //       io.to(socket.id).emit('receive-message', fullMessage); // Feedback to sender
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //     }
// //   });

// //   socket.on('disconnect', async () => {
// //     try {
// //       const userId = socket.userId;
// //       if (userId) {
// //         await User.findByIdAndUpdate(userId, { online: false });
// //         userSockets.delete(userId);
// //         io.emit('status-update', { userId, online: false });
// //         console.log(`User ${userId} disconnected and marked offline`);
// //       }
// //     } catch (error) {
// //       console.error('Error handling disconnect:', error);
// //     }
// //   });
// // });

// // server.listen(config.port, () => {
// //   console.log(`Server running on port ${config.port}`);
// // });


// require('dotenv').config(); // Load environment variables from .env

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const http = require('http');
// const { Server } = require('socket.io');
// const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/user');
// const User = require('./models/User');
// const jwt = require('jsonwebtoken'); // For authentication
// const path = require('path');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// // Middleware
// app.use(express.json());
// app.use(cors()); // Simple CORS setup, allowing all origins (adjust for security in production)

// // Serve uploaded files statically (if applicable)
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Register routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chat-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection failed:', err));

// // Map to store user-socket mappings
// const userSockets = new Map();

// io.use((socket, next) => {
//   // Authenticate Socket.IO connection using JWT
//   const token = socket.handshake.auth.token;
//   if (!token) {
//     return next(new Error('Authentication error: No token provided'));
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
//     socket.userId = decoded.id; // Store user ID in socket
//     next();
//   } catch (error) {
//     return next(new Error('Authentication error: Invalid token'));
//   }
// });

// io.on('connection', (socket) => {
//   console.log('Authenticated user connected:', socket.id, 'User ID:', socket.userId);

//   socket.on('user-online', async () => {
//     try {
//       const userId = socket.userId;
//       if (userId) {
//         await User.findByIdAndUpdate(userId, { online: true });
//         userSockets.set(userId, socket.id);
//         io.emit('status-update', { userId, online: true });
//         console.log(`User ${userId} is now online (Socket ID: ${socket.id})`);
//       } else {
//         console.error('No userId found for socket:', socket.id);
//       }
//     } catch (error) {
//       console.error('Error updating user online status:', error);
//     }
//   });

//   socket.on('send-message', async (message) => {
//     try {
//       const senderId = socket.userId;
//       if (!senderId) {
//         console.error('No sender ID found for socket:', socket.id);
//         return;
//       }

//       // Ensure message has sender and receiver
//       const fullMessage = { ...message, sender: senderId };
//       const receiverSocketId = userSockets.get(message.receiver);
//       if (receiverSocketId) {
//         io.to(receiverSocketId).emit('receive-message', fullMessage);
//         console.log(`Message sent to receiver ${message.receiver} (Socket ID: ${receiverSocketId})`);
//       } else {
//         console.log(`Receiver ${message.receiver} is offline or not connected. Message stored in MongoDB.`);
//         // Add logic to store message in MongoDB if needed
//       }
//       io.to(socket.id).emit('receive-message', fullMessage); // Feedback to sender
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   });

//   socket.on('disconnect', async () => {
//     try {
//       const userId = socket.userId;
//       if (userId) {
//         await User.findByIdAndUpdate(userId, { online: false });
//         userSockets.delete(userId);
//         io.emit('status-update', { userId, online: false });
//         console.log(`User ${userId} disconnected and marked offline`);
//       }
//     } catch (error) {
//       console.error('Error handling disconnect:', error);
//     }
//   });
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


require('dotenv').config(); // Load environment variables from .env
console.log('Loaded MONGODB_URI:', process.env.MONGODB_URI); // Debug log
console.log('Loaded PORT:', process.env.PORT); // Debug port
console.log('Loaded ORIGIN_URL:', process.env.ORIGIN_URL); // Debug CORS origin

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const User = require('./models/User');
const jwt = require('jsonwebtoken'); // For authentication
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// CORS configuration using environment variable with fallback
const corsOptions = {
  origin: process.env.ORIGIN_URL || '*', // Use ORIGIN_URL or allow all in development
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow cookies/auth credentials if needed
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions)); // Apply CORS with dynamic origin

// Serve uploaded files statically (if applicable)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Connect to MongoDB with explicit validation
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/chat-app';
if (!mongoUri || typeof mongoUri !== 'string') {
  console.error('Invalid MONGODB_URI:', mongoUri);
  process.exit(1);
}
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection failed:', err));

// Map to store user-socket mappings
const userSockets = new Map();

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  console.log('Socket token:', token);
  if (!token) {
    return next(new Error('Authentication error: No token provided'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
    socket.userId = decoded.id;
    console.log('Decoded user ID:', socket.userId);
    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    return next(new Error('Authentication error: Invalid token'));
  }
});

io.on('connection', (socket) => {
  console.log('Authenticated user connected:', socket.id, 'User ID:', socket.userId);

  socket.on('user-online', async () => {
    try {
      const userId = socket.userId;
      if (userId) {
        await User.findByIdAndUpdate(userId, { online: true });
        userSockets.set(userId, socket.id);
        io.emit('status-update', { userId, online: true });
        console.log(`User ${userId} is now online (Socket ID: ${socket.id})`);
      } else {
        console.error('No userId found for socket:', socket.id);
      }
    } catch (error) {
      console.error('Error updating user online status:', error);
    }
  });

  socket.on('send-message', async (message) => {
    try {
      const senderId = socket.userId;
      if (!senderId) {
        console.error('No sender ID found for socket:', socket.id);
        return;
      }

      const fullMessage = { ...message, sender: senderId };
      const receiverSocketId = userSockets.get(message.receiver);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit('receive-message', fullMessage);
        console.log(`Message sent to receiver ${message.receiver} (Socket ID: ${receiverSocketId})`);
      } else {
        console.log(`Receiver ${message.receiver} is offline or not connected.`);
      }
      io.to(socket.id).emit('receive-message', fullMessage);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  });

  socket.on('disconnect', async () => {
    try {
      const userId = socket.userId;
      if (userId) {
        await User.findByIdAndUpdate(userId, { online: false });
        userSockets.delete(userId);
        io.emit('status-update', { userId, online: false });
        console.log(`User ${userId} disconnected and marked offline`);
      }
    } catch (error) {
      console.error('Error handling disconnect:', error);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});