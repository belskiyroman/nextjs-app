import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { commonActions } from '../../redux/actions/index';

const container = connect(
  state => ({
    currentUrl: state.common.currentUrl,
    isUserAuth: state.user.isAuth,
    userProfile: state.user.profile,
  }),
  dispatch => ({
    onTest: bindActionCreators(commonActions.changeUrl, dispatch),
  }),
);
const CandidatesConnect = Component => container(Component);
export default CandidatesConnect;
