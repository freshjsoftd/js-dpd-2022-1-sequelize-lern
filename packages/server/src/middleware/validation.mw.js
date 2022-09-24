import createError from 'http-errors';
import { NEW_BOOK_VALIDATION_SCHEMA,
        CHANGE_BOOK_VALIDATION_SCHEMA,
        NEW_GENRE_VALIDATION_SCHEMA } from "../utils/validationSchema";

export const validateNewBook = async (req, res, next) => {
  const body = req.body;  
  try {
    await NEW_BOOK_VALIDATION_SCHEMA.validate(body, {abortEarly:false});
    next()
  } catch (error) {
    next(error);
  }
}

export const validateChangedBook = async (req, res, next) =>{
  const body = req.body;
  if(await CHANGE_BOOK_VALIDATION_SCHEMA.isValid(body)){
    return next();
  }
  console.log('Unprocessable Entity')
  next(createError(422, 'Unprocessable Entity'));
}

export const validateNewGenre = async (req, res, next) => {
  const body = req.body;
  try {
    await NEW_GENRE_VALIDATION_SCHEMA.validate(body, {abortEarly:false});
    next()
  } catch (error) {
    next(error);
  }
}



/* export const validateNewBook = (req, res, next) => {
  const body = req.body;
  NEW_BOOK_VALIDATION_SCHEMA.validate(body)
      .then(validatedBook => {
        req.body = validatedBook;
        next()
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
} */