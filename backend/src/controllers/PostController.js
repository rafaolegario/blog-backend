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

    const removedPost = await postsModel.deletePost(req.params.id)
    return res.status(204).json(removedPost)
}

const updatePost = async (req, res) =>{
    
    const updatedPost = await postsModel.updatePost(req.params.id,req.body)
    return res.status(204).json(updatedPost)
}

module.exports = {
    getAll,
    createPost,
    deletePost, 
    updatePost
}