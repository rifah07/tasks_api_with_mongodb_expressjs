const errorHandler = (error, req, res, next) => {
  if (error) {
    res.status(400).json({
      status: "failed",
      message: "Something went wrong",
    });
  } else {
    next();
  }
};

module.exports = errorHandler;