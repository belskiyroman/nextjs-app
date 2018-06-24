import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StatusMarker from './StatusMarker';
import GroupUserProfile from './GroupUserProfile';

class Table extends Component {

  static socialNetwork = {
    linkedin: 'icon-linkedin',
    headHunter: 'icon-headHunter',
    facebook: 'icon-facebook',
    github: 'icon-github',
  };

  static cellType = {
    header: Symbol('header'),
    socialData: Symbol('socialData'),
    status: Symbol('status'),
    users: Symbol('users'),
    date: Symbol('date'),
    colorText: Symbol('colorText'),
    text: Symbol('text'),
  };

  static Row(props) {
    return <tr className={classNames(props.className)}>{props.children}</tr>
  }

  static Cell(props) {
    let content = null;
    switch(props.cellType) {
      case Table.cellType.header:
        content = socialDataContent(props);
        break;
      case Table.cellType.socialData:
        content = socialDataContent(props);
        break;
      case Table.cellType.status:
        content = statusContent(props);
        break;
      case Table.cellType.users:
        content = usersContent(props);
        break;
      case Table.cellType.date:
        content = dateContent(props);
        break;
      case Table.cellType.colorText:
        content = colorTextContent(props);
        break;
      case Table.cellType.text:
        content = textContent(props);
        break;
      default:
        content = props.children;
    }
    return <td className={classNames('table-row', props.className)}>{content}</td>
  }

  constructor(props) {
    super(props);
    this.state = {
      sortedColumn: null,
    };
  }

  sort(columnIndex, header) {
    this.props.sort && this.props.sort(columnIndex, header);
    this.setState({ sortedColumn: columnIndex });
  }

  getHeaders() {
    return this.props.headers.map((header, index, headers) => {
      const textAlign = {
        'text-left': index === 0,
        'text-right': index === (headers.length - 1),
      };
      const isActive = this.state.sortedColumn === index;
      const highlight = {
        'bg-gray-800': isActive,
        'p-l-10': isActive,
        'p-r-10': isActive,
      };

      return (
        <td className={classNames(textAlign)} key={header} onClick={() => this.sort(index, header)}>
          <span className={classNames('table-header', highlight)}>{header}</span>
        </td>
      )
    });
  }

  render() {
    return (
      <table className={classNames('table', this.props.className)}>
        <thead>
          <tr>{this.getHeaders()}</tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }

}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  sort: PropTypes.func,
};

Table.Cell.propTypes = {
  cellType: PropTypes.oneOf(Object.values(Table.cellType)),
  status: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.oneOf(Object.values(Table.socialNetwork))),
  text: PropTypes.string,
  subText: PropTypes.string,
  position: PropTypes.string,
  level: PropTypes.string,
  tag: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ])
};

export default Table


/* ======== privet context ======== */

const textContent = ({text, subText}) => {
  return (
    <React.Fragment>
      {text ? <p className='font-16 in-gray-400'>{text.trim()}</p> : null}
      {subText ? <p className='font-14 in-gray-400'>{subText.trim()}</p> : null}
    </React.Fragment>
  )
};
const colorTextContent = ({text, subText}) => {
  return (
    <React.Fragment>
      {text ? <p className='font-18 in-blue-500'>{text.trim()}</p> : null}
      {subText ? <p className='font-14 in-gray-500'>{subText.trim()}</p> : null}
    </React.Fragment>
  )
};
const socialDataContent = ({icons=[], position, level}) => {
  const socialIcons = (icons) => (
    <div className='social m-r-10'>{
      icons.map(icon => (<span className={classNames('social-icon', icon)} key={icon} />))
    }</div>
  );

  return (
    <div className='flex'>
      {socialIcons(icons)}
      <div className='line-height-20'>
        <p className='font-16 in-gray-400'>{position}</p>
        <p className='font-14 in-gray-400'>{level}</p>
      </div>
    </div>
  )
};
const usersContent = ({users=[]}) => <GroupUserProfile users={users} />;
const statusContent = ({tag, status}) => (
  <StatusMarker
    tag={StatusMarker.status[tag] ? StatusMarker.status[tag].title : tag}
    status={StatusMarker.status[status] ? StatusMarker.status[status].colorClass : ''}
  />);
const dateContent = ({date}) => (
  <span className='in-gray-500 font-14'>
    {date ? new Date(date).toDateString() : null}
  </span>);
