const postsModel = require('../models/PostsModel')


const getAll = async (req, res) =>{
    const posts = await postsModel.getAll()
    return res.status(200).json(posts)
}

const createPost = async (req, res) => {
   
    const createdPost = await postsModel.createPost(req.body)
   
    return res.status(200).json(createdPost)
}

const deletePost = async (req, res) =>{
    const postId = parseInt(req.params.id)
    await postsModel.deletePost(postId)
    return res.status(204).json()
}

const updatePost = async (req, res) =>{
    const postId = parseInt(req.params.id)
    await postsModel.updatePost(postId, req.body)
    return res.status(204).json()
}

module.exports = {
    getAll,
    createPost,
    deletePost, 
    updatePost
}