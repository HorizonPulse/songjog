import { BaseController } from '../..';
import { fetchEmployeeByUserId } from '../../services/employees';

export class FetchEmployeesController extends BaseController {
  async handleRequest() {
    const userId = this.req.user!.id;
    const employee = await fetchEmployeeByUserId(Number(userId));
    this.ok({
      isError: false,
      body: {
        employee
      }
    });
  }
}
