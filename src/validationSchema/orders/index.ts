import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
