import React, { Component } from 'react';
import Router from './Router';
import NotFoundPage from './components/404';
import Applicants from './pages/Applicants';
import Positions from './pages/Positions';
import JobInterviews from './pages/JobInterviews';
import JobOffers from './pages/JobOffers';
import Feedbacks from './pages/Feedbacks';
import Contacts from './pages/Contacts';
import Analytic from './pages/Analytic';

const routes = [
  { component: Applicants, path: '/' },
  { component: Applicants, path: '/human_resources/applicants' },
  { component: Positions, path: '/human_resources/positions' },
  { component: JobInterviews, path: '/human_resources/job_interviews' },
  { component: JobOffers, path: '/human_resources/job_offers' },
  { component: Feedbacks, path: '/human_resources/feedbacks' },
  { component: Contacts, path: '/human_resources/contacts' },
  { component: Analytic, path: '/human_resources/analytic' },
];

const App = () => <Router {...this.props} routes={routes} notFound={NotFoundPage} />;

export default App;
