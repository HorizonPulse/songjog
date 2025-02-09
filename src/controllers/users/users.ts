import { BaseController, Joi, ValidationSchema } from '../..';
import { extractAuthorizationToken } from '../../middleware/authenticate';
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
      email: EMAIL,
      password: PASSWORD,
      firstName: FIRST_NAME,
      lastName: LAST_NAME,
      phoneNumber: PHONE_NUMBER,
      countryCode: COUNTRY_CODE,
      dob: DOB,
      gender: GENDER,
      location: LOCATION,
      thanaId: THANA_ID,
      userType: USER_TYPE
    } = this.getData().body;

    await signUp({
      EMAIL,
      PASSWORD,
      FIRST_NAME,
      LAST_NAME,
      PHONE_NUMBER,
      COUNTRY_CODE,
      DOB,
      GENDER,
      LOCATION,
      THANA_ID,
      USER_TYPE
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
    const token = extractAuthorizationToken(this.req as any);
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
