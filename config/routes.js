const router = require('express').Router();
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');
const commentsController = require('../controllers/commentsController');
const secureRoute = require('../lib/secureRoute');

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

router.get('/logout', authController.logoutRoute);

// HOME route
router.get('/', function(req, res) {
  res.render('home');
});

// INDEX Route
router.get('/posts', postController.indexRoute);

// NEW Route
router.get('/posts/new', secureRoute, postController.newRoute);
router.post('/posts', secureRoute, postController.createRoute);

// SHOW Route
router.get('/posts/:id', postController.showRoute);

// UPDATE route
router.put('/posts/:id', secureRoute, postController.updateRoute);

// EDIT route
router.get('/posts/:id/edit', secureRoute, postController.editRoute);

// DELETE Route
router.delete('/posts/:id', secureRoute, postController.deleteRoute);

// Comment CREATE route
router.post('/posts/:postId/comments', secureRoute, commentsController.createRoute);

// Comment DELETE route
router.delete('/posts/:postId/comments/:commentIs', secureRoute, commentsController.deleteRoute);

module.exports = router;
