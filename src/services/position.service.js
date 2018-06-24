import apiService from './api.service';

export class PositionService {
  constructor(api) {
    this.api = api;
  }

  async getPositionsList() {
    try {
      const res = await this.api.positionsList();
      return res;
    } catch(e) {
      return res;
    }
  }

  async getPosition(id) {
    try {
      const res = await this.api.position({id});
      return res;
    } catch(e) {
      return res;
    }
  }

  async createPosition(id) {
    try {
      const res = await this.api.createPosition({id});
      return res;
    } catch(e) {
      return res;
    }
  }

  async updatePosition(id) {
    try {
      const res = await this.api.updatePosition({id});
      return res;
    } catch(e) {
      return res;
    }
  }
}

const positionService = new PositionService(apiService);
export default positionService;
