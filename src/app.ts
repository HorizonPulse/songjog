import { ExpressApp } from '.';
import { errorHandler } from './middleware/errorMiddleware';
import { router } from './routes';

const swaggerInfo = {
  version: '2.0.0',
  title: 'Example Expressive App',
  contact: {
    name: 'Sabbir Siddiqui',
    email: 'sabbir.m.siddiqui@gmail.com'
  }
};

// todo -> add validation schema cascade
// const rootValidationSchema: ValidationSchema = {
//   query: {
//     q: Joi.string().required().valid('emnei')
//   }
// }
declare global {
  namespace Express {
    interface Request {
      user: {
        id: number;
      };
    }
  }
}
export default new ExpressApp(router, {
  basePath: '/',
  allowCors: true,
  swaggerInfo,
  errorHandler,
  authorizer: (req, res) => {
    console.log(`${req.url}: auth from top`);
    res.setHeader('testingAuth', 1234);
  },
  requestLoggerOptions: {
    disabled: false
  }
}).express;
