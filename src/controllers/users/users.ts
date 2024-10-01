import { BaseController, Joi, ValidationSchema } from '../..';
import { signIn, signOut, signUp } from '../../services/users';

export class SignUpController extends BaseController {
  validationSchema?: ValidationSchema = {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNumber: Joi.string().optional(),
      countryCode: Joi.string().optional(),
      location: Joi.string().optional(),
      thanaId: Joi.number().optional(),
      dob: Joi.string().required(),
      gender: Joi.string().required(),
      userType: Joi.string().required().allow('employer', 'employee')
    }
  };
  async handleRequest() {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      countryCode,
      dob,
      gender,
      location,
      thanaId,
      userType
    } = this.getData().body;

    await signUp({
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      countryCode,
      dob,
      gender,
      location,
      thanaId,
      userType
    });

    this.ok({
      isError: false,
      body: {
        message: 'User created'
      }
    });
  }
}

export class SignInController extends BaseController {
  validationSchema?: ValidationSchema = {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
    }
  };
  async handleRequest() {
    const { email, password } = this.getData().body;
    const token = await signIn({ email, password });
    this.ok({
      isError: false,
      body: {
        token
      }
    });
  }
}

export class SignOutController extends BaseController {
  async handleRequest() {
    const token = this.req.headers['x-access-token'] as string | undefined;
    if (!token) {
      throw new Error('Token not found');
    }
    await signOut({ token });
    this.ok({
      isError: false,
      body: {
        message: 'User signed out'
      }
    });
  }
}
