export const validateTodo = (req, res, next) => {
  const { title } = req.body;
  if(!title || typeof title !== 'string') {
    return res.status(400).json({
      message: "Title is required and must be a string"
    });
  }
  next();
}