import apiService from './api.service';

export class CommunicationService {
  constructor(api) {
    this.api = api;
  }

  async getCommunicationsList() {
    try{
      const res = await this.api.communicationsList();
      return res;
    } catch(e) {
      return e;
    }
  }

  async getCommunication(id) {
    try{
      const res = await this.api.communication({id});
      return res;
    } catch(e) {
      return e;
    }
  }

  async createCommunication(id) {
    try{
      const res = await this.api.createCommunication({id});
      return res;
    } catch(e) {
      return e;
    }
  }

  async updateCommunication(id) {
    try{
      const res = await this.api.updateCommunication({id});
      return res;
    } catch(e) {
      return e;
    }
  }

}

const communicationService = new CommunicationService(apiService);
export default communicationService;
