import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const topMenu = [
  { name: 'Кандидаты', link: '/candidates' },
  { name: 'Вакансии', link: '/human_resources/positions' },
  { name: 'Собеседования', link: '/human_resources/job_interviews' },
  { name: 'Офферы', link: '/human_resources/job_offers' },
  { name: 'Комментарии', link: '/human_resources/feedbacks' },
  { name: 'Коммуникация', link: '/human_resources/contacts' },
];
const middleMenu = [
  { name: 'Статистика', link: '/human_resources/analytic' },
  { name: 'Архив', link: '/human_resources/#' },
];

const MenuItem = ({ link, name, active }) => {
  const classes = classNames('in-gray-500', { active });
  return (
    <li key={name + link}>
      <a className={classes} href={link}>{name}</a>
    </li>
  );
};

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

const Sidebar = ({ currentUrl, children }) => (
  <aside className="sidebar flex-column">
    <div className="logo">
      <img src="/static/img/logo.svg" alt="user" />
    </div>
    <div className="m-t-10 flex-column flex-grow-1 flex-space-beatwen">
      <ul className="m-l-66">
        {
          topMenu.map(item =>
            <MenuItem {...item} active={item.link === currentUrl} key={item.link} />)
        }
      </ul>
      <ul className="m-l-66">
        {
          middleMenu.map(item =>
            <MenuItem {...item} active={item.link === currentUrl} key={item.link} />)
        }
      </ul>
      <ul className="m-l-66 m-b-40">
        <li className="m-l-n45">{children}</li>
        <li><a className="in-blue-500" href="/users/sign_out">Выход</a></li>
      </ul>
    </div>
  </aside>
);

Sidebar.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Sidebar;
