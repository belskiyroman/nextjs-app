import apiService from './api.service';

export class EmployeeService {
  constructor(api) {
    this.api = api;
  }

  async getEmployee(id) {
    try {
      const res = await this.api.employee({id});
      return res;
    } catch (e) {
      return e;
    }
  }

  async createEmployee(id) {
    try {
      const res = await this.api.createEmployee({id});
      return res;
    } catch (e) {
      return e;
    }
  }

  async updateEmployee(id) {
    try {
      const res = await this.api.updateEmployee({id});
      return res;
    } catch (e) {
      return e;
    }
  }

}

const employeeService = new EmployeeService(apiService);
export default employeeService;
