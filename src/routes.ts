import { ExpressiveRouter, Route, subroute } from '.';
import { userRouter } from './controllers/users';

export const router: ExpressiveRouter = {
  // routes: [Route.get('/v0/health', new HealthController())],
  subroutes: [subroute('/v1/users', userRouter)]
};
