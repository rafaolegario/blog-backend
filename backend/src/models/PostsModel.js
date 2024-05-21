const connection = require('./connection')

const getAll = async () =>{
    const posts = await connection.execute('SELECT * FROM posts')
    return posts[0]
}

const createPost = async (post) =>{
    const {title, author, content} = post

    const query = 'INSERT INTO posts(title, author, content) VALUES (?,?,?)'

    const [createdPost] = await connection.execute(query, [title,author,content])
    
    return {insertId: createdPost.insertId}
}

const deletePost = async (id) =>{
    const removedPost = await connection.execute('DELETE FROM posts WHERE id=?',[id])
    return removedPost
}


const updatePost = async (id, post) =>{
    const query = 'UPDATE posts SET title=?, author=?, content=? WHERE id = ?'

    const {title, author, content} = post

    const [updatedPost] = await connection.execute(query,[title, author, content, id])
    return updatedPost
}

module.exports = {
    getAll,
    createPost,
    deletePost,
    updatePost
}