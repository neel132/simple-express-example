export const errorHandler = (err, req, res, next) => {
  res.staus(500).json({
    message: err.message || 'Internal Server Error'
  })
}