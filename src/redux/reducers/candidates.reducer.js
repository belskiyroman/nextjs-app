import list from '../../seeds/api/candidates/list.json';
import apiService from '../../services/api.service';

apiService

const initialState = {
  candidatesList: list,
};

const candidatesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    default: return state;
  }
};

export default candidatesReducer;