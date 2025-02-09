import { ExpressiveRouter, Route, subroute } from '../..';
import { isAuthenticated } from '../../middleware/authenticate';
import { FetchEmployeesController } from './employees';

export const employeesRouter: ExpressiveRouter = {
  subroutes: [
    subroute(
      '/fetchEmployees',
      {
        routes: [Route.get('/', new FetchEmployeesController())]
      },
      {
        authorizer: isAuthenticated
      }
    )
  ]
};
