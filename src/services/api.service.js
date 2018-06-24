import { getToken } from '../utils/token.util';
import { baseUrl, apiDictionary, requiredFields } from '../config/api.config';
import ApiClient from 'apiapi';

const apiService = new ApiClient({
  baseUrl,
  required: requiredFields,
  methods: {
    candidate: apiDictionary.candidate,
    candidatesList: apiDictionary.candidatesList,
    candidateCreate: apiDictionary.candidateCreate,
    candidateUpdate: apiDictionary.candidateUpdate,

    communication: apiDictionary.communication,
    communicationsList: apiDictionary.communicationsList,
    communicationCreate: apiDictionary.communicationCreate,
    communicationUpdate: apiDictionary.communicationUpdate,

    employee: apiDictionary.employee,
    employeeCreate: apiDictionary.employeeCreate,
    employeeUpdate: apiDictionary.employeeUpdate,

    feedback: apiDictionary.feedback,
    feedbacksList: apiDictionary.feedbacksList,
    feedbackCreate: apiDictionary.feedbackCreate,
    feedbackUpdate: apiDictionary.feedbackUpdate,

    jobInterview: apiDictionary.jobInterview,
    jobInterviewList: apiDictionary.jobInterviewList,
    jobInterviewCreate: apiDictionary.jobInterviewCreate,
    jobInterviewUpdate: apiDictionary.jobInterviewUpdate,

    position: apiDictionary.position,
    positionList: apiDictionary.positionList,
    positionCreate: apiDictionary.positionCreate,
    positionUpdate: apiDictionary.positionUpdate,
  },

  transformRequest(params, requestBody, opts) {
    opts.headers = {
      ...opts.headers,
      Authorization: 'Bearer ' + getToken(),
    };
    return [params, requestBody, opts];
  },

});

export default apiService;
