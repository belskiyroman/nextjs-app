import apiService from './api.service';

export class JobInterviewService {
  constructor(api) {
    this.api = api;
  }

  async getJobInterviewsList() {
    try {
      const res = await this.api.getJobInterviewsList();
      return res;
    } catch (e) {
      return e;
    }
  }

  async getJobInterview(id) {
    try {
      const res = await this.api.getJobInterview({id});
      return res;
    } catch (e) {
      return e;
    }
  }

  async createJobInterview(id) {
    try {
      const res = await this.api.createJobInterview({id});
      return res;
    } catch (e) {
      return e;
    }
  }

  async updateJobInterview(id) {
    try {
      const res = await this.api.updateJobInterview({id});
      return res;
    } catch (e) {
      return e;
    }
  }
}

const jobInterviewService = new JobInterviewService(apiService);
export default jobInterviewService;
