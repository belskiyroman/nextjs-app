import CandidatesPage from './candidates';
import data from '../seeds/candidates';

CandidatesPage.getInitialProps = async ({ store }) => data;

export default CandidatesPage;
