const generateErrorMessage = error => {
  let errorMessage = 'Something went wrong';
  if (error.response) {
    if (error.response.data.message) {
      errorMessage = error.response.data.message;
    }
  } else if (error.request) {
    if (error.request.response) {
      errorMessage = error.request;
    }
  } else {
    errorMessage = error.message;
  }
  return errorMessage;
};

export default generateErrorMessage;
