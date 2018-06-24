export const baseUrl = 'http://hrportal.herokuapp.com';

export const apiDictionary = {
  candidate: 'GET /api/candidates/{id}',
  candidatesList: 'GET /api/candidates',
  candidateCreate: 'POST /api/candidates',
  candidateUpdate: 'PATCH /api/candidates/{id}',

  communication: 'GET /api/communications/{id}',
  communicationsList: 'GET /api/communications',
  communicationCreate: 'POST /api/communications',
  communicationUpdate: 'PUT /api/communications/{id}',

  employee: 'GET /api/employee_requests/{id}',
  employeeCreate: 'POST /api/employee_requests',
  employeeUpdate: 'PATCH /api/employee_requests/{id}',

  feedback: 'GET api/feedbacks/{id}',
  feedbacksList: 'GET api/feedbacks',
  feedbackCreate: 'POST api/feedbacks',
  feedbackUpdate: 'PUT api/feedbacks/{id}',

  jobInterview: 'GET api/job_interviews/{id}',
  jobInterviewList: 'GET api/job_interviews',
  jobInterviewCreate: 'POST api/job_interviews',
  jobInterviewUpdate: 'PATCH api/job_interviews/{id}',

  position: 'GET api/positions/{id}',
  positionList: 'GET api/positions',
  positionCreate: 'POST api/positions',
  positionUpdate: 'PUT api/positions/{id}',
};

export const requiredFields = {
  candidateCreate: ['first_name', 'last_name', 'status', 'source', 'hr_id', 'location_id', 'position_id'],
  candidateUpdate: ['first_name', 'last_name', 'status', 'source', 'hr_id', 'location_id', 'position_id'],

  communicationCreate: ['call_type', 'note', 'candidate_id'],
  communicationUpdate: ['call_type', 'note', 'candidate_id'],

  employeeCreate: ['description', 'level', 'number', 'location_id', 'status', 'extra_notes', 'due_date'],
  employeeUpdate: ['description', 'level', 'number', 'location_id', 'status', 'extra_notes', 'due_date'],

  feedbackCreate: ['candidate_id', 'author_id', 'content'],
  feedbackUpdate: ['candidate_id', 'author_id', 'content'],

  jobInterviewCreate: ['date', 'start_time', 'end_time', 'place', 'hr_id', 'candidate_id'],
  jobInterviewUpdate: ['date', 'start_time', 'end_time', 'place', 'hr_id', 'candidate_id'],

  positionCreate: ['title', 'description'],
  positionUpdate: ['title', 'description'],
};
