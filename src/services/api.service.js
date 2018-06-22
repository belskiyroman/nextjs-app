import ApiClient from 'apiapi';

const apiService = new ApiClient({
  baseUrl: 'http://hrportal.herokuapp.com',

  methods: {
    issues: 'get /repos/{user}/{repo}/issues',
  },

  transformRequest(params, requestBody, opts) {
    opts.headers = {
      ...opts.headers,
      Authorization: 'Bearer',
    };
    return [params, requestBody, opts];
  },

});

export default apiService;
