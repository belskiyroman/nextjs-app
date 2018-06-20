import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { commonActions } from '../redux/actions';
import Index from '../components';

const mapStateToProps = state => ({
  test: state.common.test,
  server: state.common.server,
});
const mapDispatchToProps = dispatch => ({
  onTest: bindActionCreators(commonActions.actionIndex, dispatch),
});

const IndexContainer = connect(mapStateToProps, mapDispatchToProps)(Index);
export default IndexContainer;
