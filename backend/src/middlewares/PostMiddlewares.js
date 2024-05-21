const validateBody = (req, res, next) =>{
    const {body} = req

    if(body.title === undefined || body.author === undefined || body.content === undefined) {
      return  res.status(400).json({message: 'Campos obrigatorios!'})
    }

    if(body.title === ''|| body.author === ''|| body.content === '') {
      return  res.status(400).json({message: 'Campos não podem ser vazios!'})
    }

    next()
}

module.exports ={
    validateBody,
}