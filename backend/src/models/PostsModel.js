const connection = require('./connection')


const getAll = async () =>{
    const posts = await connection.execute('SELECT * FROM posts')
    return [posts]
}

const createPost = async (post) =>{
    const {title, author, content, picture} = post
    
    const query = 'INSERT INTO posts(title, author, content, picture) VALUES (?,?,?,?)'

    const [createdPost] = await connection.execute(query, [title,author,content, picture])
    
    return {insertId: createdPost.insertId}
}

const deletePost = async (ID) =>{
    const removedPost = await connection.execute('DELETE FROM posts WHERE id=?',[ID])
    return removedPost
}


const updatePost = async (ID, post) =>{
    const query = 'UPDATE posts SET title=?, author=?, content=?, picture=? WHERE id = ?'
    const {title, author, content, picture} = post

    const [updatedPost] = await connection.execute(query,[title, author, content,picture, ID])
    return updatedPost
}

module.exports = {
    getAll,
    createPost,
    deletePost,
    updatePost
}