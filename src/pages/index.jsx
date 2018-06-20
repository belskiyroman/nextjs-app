import Applicants from '../components/pages/Applicants';
import data from '../seeds/applicants';

Applicants.getInitialProps = async ({ store }) => {
  return data;
};

export default Applicants;
