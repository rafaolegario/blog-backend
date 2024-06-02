const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll = async () =>{
    const posts = await prisma.posts.findMany()
    return [posts]
}

const createPost = async (post) =>{
    const {title, author, content, picture} = post

    const randonNumber = Math.floor(Math.random()*1001)

    const createdPost = await prisma.posts.create({
        data: {
            title: title,
            author: author,
            content: content,
            picture: picture,
            codigo: randonNumber
        }
    })
    
    return {insertId: createdPost.insertId}
}

const deletePost = async (ID) =>{
    const removedPost = await prisma.posts.delete({
        where:{
            id: ID
        }
    })
    return removedPost
}


const updatePost = async (ID, post) =>{
    const {title, author, content, picture} = post

    const updatedPost = await prisma.posts.update({
        where:{
            id:ID
        },
       data: {
            title: title,
            author: author,
            content: content,
            picture: picture
        }
    })
    return updatedPost
}

module.exports = {
    getAll,
    createPost,
    deletePost,
    updatePost
}