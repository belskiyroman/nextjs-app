import React, { Component } from 'react';
import classNames from 'classnames';

class Sidebar extends Component {

  static defaultProps = {
    currentUrl: global && global.location ? global.location.pathname + global.location.search : null,
  };

  topMenu = [
    { name: 'Кандидаты', link: '/human_resources/applicants' },
    { name: 'Вакансии', link: '/human_resources/positions' },
    { name: 'Собеседования', link: '/human_resources/job_interviews' },
    { name: 'Офферы', link: '/human_resources/job_offers' },
    { name: 'Комментарии', link: '/human_resources/feedbacks' },
    { name: 'Коммуникация', link: '/human_resources/contacts' },
  ];
  middleMenu = [
    { name: 'Статистика', link: '/human_resources/analytic' },
    { name: 'Архив', link: '/human_resources/#' },
  ];

  getMenu(config) {
    return (
      <ul className='m-l-66'>
        {config.map(item => {
          const classes = classNames('in-gray-500', {active: item.link === this.props.currentUrl});
          return <li key={item.name+item.link}><a className={classes} href={item.link}>{item.name}</a></li>
        })}
      </ul>
    );
  }

  render() {
    return (
      <aside className='sidebar flex-column'>
        <div className='logo'>
          <img src='/static/img/logo.svg' alt='user' />
        </div>
        <div className='m-t-10 flex-column flex-grow-1 flex-space-beatwen'>
          {this.getMenu(this.topMenu)}
          {this.getMenu(this.middleMenu)}
          <ul className='m-l-66 m-b-40'>
            <li className='m-l-n45'>{this.props.children}</li>
            <li><a className='in-blue-500' href='/users/sign_out'>Выход</a></li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Sidebar
