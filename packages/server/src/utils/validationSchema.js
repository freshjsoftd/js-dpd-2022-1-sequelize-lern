import * as Yup from 'yup';

const TITLE_NAME_SCHEMA = Yup.string()
          .trim()
          .min(2)
          .max(50)
          .matches(/^[A-Z,А-Я](\w+\s){1,10}\w+$/)
const SOME_ID_SCHEMA = Yup.number()
          .positive('This field must be positive')
          .integer('This field must be integer')

export const NEW_BOOK_VALIDATION_SCHEMA = Yup.object().shape({
  title: TITLE_NAME_SCHEMA.required(),
  genre_id: SOME_ID_SCHEMA,
  shelf_id: SOME_ID_SCHEMA
})
export const CHANGE_BOOK_VALIDATION_SCHEMA = Yup.object().shape({
  title: TITLE_NAME_SCHEMA,
  genre_id: SOME_ID_SCHEMA,
  shelf_id: SOME_ID_SCHEMA
})