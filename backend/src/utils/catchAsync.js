const catchAsync= (fn) => {
  return (req, res, next) => {
      fn(req, res, next)
        .then(() => next())
        .catch((err) => {
          const statusCode = err.statusCode || 500; // Determine error code
          res.status(statusCode).json({
            message: err.message,
            fullError: err
          });
      });
  };
};

export default catchAsync
/*
------------------------------------------Asynchronous error handling---------------------------------------
catchasync is a higher order function that takes a function as an argument and also returns a function 
1. the function in the argument must be a function that returns a promise
2. the function is powerful enough to catch any async error inside an async function 
3. the function reduces code repetition and reduces the use of try catch blocks for error handling 
4. the fucntion passed as an argument must return a promise i.e. must be an async function
*/