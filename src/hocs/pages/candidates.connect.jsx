import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { candidatesActions } from '../../redux/actions/index';

const container = connect(
  state => ({
    currentUrl: state.common.currentUrl,
    isUserAuth: state.user.isAuth,
    userProfile: state.user.profile,
    candidatesList: state.candidates.candidatesList,
  }),
  dispatch => ({
    fetchCandidatesList: bindActionCreators(candidatesActions.fetchCandidatesList, dispatch),
  }),
);
const CandidatesConnect = Component => container(Component);
export default CandidatesConnect;
