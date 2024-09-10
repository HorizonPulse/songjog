import bodyParser from 'body-parser';
import { celebrate, Joi } from 'celebrate';
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { signin, signout, signUp } from '../../services/users';
import { isAuthenticated } from '../../middleware/authenticate';

const router = express.Router({
  mergeParams: true
});
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
export const authService = (app: express.Express) => {
  app.use('/auth', router);
};

router.post(
  '/signup',
  celebrate({
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      username: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      countryCode: Joi.string().required(),
      dob: Joi.string().required(),
      gender: Joi.string().required()
    })
  }),
  expressAsyncHandler(async (req, res) => {
    const {
      email,
      password,
      username,
      firstName,
      lastName,
      phoneNumber,
      countryCode,
      dob,
      gender
    } = req.body;
    await signUp({
      email,
      password,
      username,
      firstName,
      lastName,
      phoneNumber,
      countryCode,
      dob,
      gender
    });
    try {
      res.json({
        isError: false,
        body: {
          message: 'User created'
        }
      });
    } catch (error) {
      const err = error as Error;
      res.json({ isError: true, message: err.message });
    }
  })
);

router.post(
  '/signin',
  celebrate({
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
    })
  }),
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const token = await signin({ email, password });
    try {
      res.json({
        isError: false,
        body: {
          token
        }
      });
    } catch (error) {
      const err = error as Error;
      res.json({ isError: true, message: err.message });
    }
  })
);

router.post(
  '/signout',
  isAuthenticated,
  expressAsyncHandler(async (req, res) => {
    const token = req.headers['x-access-token'] as string | undefined;
    if (!token) {
      throw new Error('Token not found');
    }
    const userId = req.user.id;
    await signout({ userId, token });
    try {
      res.json({
        isError: false,
        body: {
          message: 'User logged out'
        }
      });
    } catch (error) {
      const err = error as Error;
      res.json({ isError: true, message: err.message });
    }
  })
);
