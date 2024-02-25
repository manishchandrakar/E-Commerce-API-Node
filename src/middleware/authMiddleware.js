// Middleware to check if the user is authenticated
export const ensureAuthenticated = (req, res, next) => {
  // Retrieve token from the request headers
  const token = req.headers['authorization'];

  // Verify the token
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // Token is not valid
        res.status(401).json({ message: 'Failed to authenticate token.' });
      } else {
        // Token is valid
        req.user = decoded; // Save decoded token payload for use in other routes
        next();
      }
    });
  } else {
    // No token provided
    res.status(403).send({ message: 'No token provided.' });
  }
};

// Apply ensureAuthenticated middleware to CRUD routes
// router.use("/crud", ensureAuthenticated, crudRoutes);