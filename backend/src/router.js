const express = require('express')
const router = express.Router()

const PostController = require('./controllers/PostController')
const postsMiddleware = require('./middlewares/PostMiddlewares')

router.get('/posts', PostController.getAll)
router.post('/posts',postsMiddleware.validateBody, PostController.createPost)
router.delete('/posts/:id', PostController.deletePost)
router.put('/posts/:id',postsMiddleware.validateBody, PostController.updatePost)

module.exports = router