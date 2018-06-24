import apiService from './api.service';

export class FeedbackService {
  constructor(api) {
    this.api = api;
  }

  async getFeedbacksList() {
    try {
      const res = await this.api.feedbacksList();
      return res;
    } catch (e) {
      return e;
    }
  }

  async getFeedback(id) {
    try {
      const res = await this.api.feedback({id});
      return res;
    } catch (e) {
      return e;
    }
  }

  async createFeedback(id) {
    try {
      const res = await this.api.createFeedback({id});
      return res;
    } catch (e) {
      return e;
    }
  }

  async updateFeedback(id) {
    try {
      const res = await this.api.updateFeedback({id});
      return res;
    } catch (e) {
      return e;
    }
  }
}

const feedbackService = new FeedbackService(apiService);
export default feedbackService;
