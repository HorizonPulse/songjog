import { ExpressiveRouter, Route, subroute } from '../..';
import { isAuthenticated } from '../../middleware/authenticate';
import { SignInController, SignOutController, SignUpController } from './users';

export const userRouter: ExpressiveRouter = {
  routes: [
    Route.post('/signUp', new SignUpController()),
    Route.post('/signIn', new SignInController())
  ],
  subroutes: [
    subroute(
      '/signOut',
      {
        routes: [Route.post('/', new SignOutController())]
      },
      {
        authorizer: isAuthenticated
      }
    )
  ]
};
