import apiService from './api.service';

export class CandidateService {
  constructor(api) {
    this.api = api;
  }

  async getCandidatesList() {
    const res = await this.api.candidatesList();
    return res;
  }

  async getCandidate(id) {
    try {
      const res = await this.api.candidate({id});
      return res;
    } catch(e) {
      return e;
    }
  }

  async createCandidate(id) {
    try {
      const res = await this.api.createCandidate({id});
      return res;
    } catch(e) {
      return e;
    }
  }

  async updateCandidate(id) {
    try {
      const res = await this.api.updateCandidate({id});
      return res;
    } catch(e) {
      return e;
    }
  }
}

const candidateService = new CandidateService(apiService);
export default candidateService;
