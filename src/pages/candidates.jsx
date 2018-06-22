import React, { Component } from 'react';
import CandidatesConnect from '../containers/pages/candidates.connect';
import MainLayout from '../layouts/MainLayout';
import ContentHeaderLayout from '../layouts/ContentHeaderLayout';
import ContentLayout from '../layouts/ContentLayout';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
import UserProfile from '../components/UserProfile';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import ModalLayout from '../components/ModalLeyout';
import Filters from '../components/Filters';

class CandidatesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sortBy: null,
      isOpenFilter: false,
      isFilterEmpty: true,
      selectedFilters: {
        specialization: [],
        level: [],
        location: [],
        status: [],
        manager: [],
      },
    };

    this.sortStrategies = [
      (a, b) => a.firstName + a.lastName > b.firstName + b.lastName,
      (a, b) => a.position + a.level > b.position + b.level,
      (a, b) => a.status > b.status,
      (a, b) => a.managers.length > b.managers.length,
      (a, b) => Date.parse(a.dateOfContact) > Date.parse(b.dateOfContact),
    ];
  }

  search(search) {
    this.setState({ search });
    console.log(search);
  }

  setFilter({ name, value }) {
    this.setState(state => ({
      selectedFilters: state.selectedFilters[name].concat(value),
    }));
    console.log(name, value);
  }

  sort(columnIndex) {
    if (this.state.sortBy === columnIndex) {
      this.state.data.reverse();
    } else {
      this.state.data.sort(this.sortStrategies[columnIndex]);
    }

    this.setState({
      sortBy: columnIndex,
    });
  }

  removeFilter({ name, value }) {
    this.setState(state => ({
      selectedFilters: state.selectedFilters[name].filter(item => item !== value),
    }));
    console.log(name, value);
  }

  resetFilter() {
    const cleanFilters = Object.keys(this.state.selectedFilters).reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});
    this.setState({ selectedFilters: cleanFilters });
    console.log(cleanFilters);
  }

  render() {
    console.log(this.props)
    const { searchCount, filters, candidatesList = [], userProfile, isUserAuth, currentUrl } = this.props;
    return (
      <MainLayout>
        <Sidebar currentUrl={currentUrl}>
          <UserProfile
            userPhoto={userProfile.image}
            userName={userProfile.displayName}
          />
        </Sidebar>
        <section className="flex-column flex-grow-1">
          <ContentHeaderLayout>
            {/*<ModalLayout*/}
              {/*type={ModalLayout.type.embedded}*/}
              {/*open={this.state.isOpenFilter}*/}
              {/*onClose={() => this.setState({ isOpenFilter: false })}*/}
            {/*>*/}
              {/*<Filters filters={filters} onClose={() => this.setState({ isOpenFilter: false })} />*/}
            {/*</ModalLayout>*/}
            <div className="flex">
              <TextInput className="search m-r-10" icon="icon-search" placeholder="Поиск" onChange={val => this.search(val)} />
              <Button className="m-r-10" type={Button.type.primary} icon="icon-filters" text="Фильтры" onClick={() => this.setState({ isOpenFilter: true })} />
              <Button type={Button.type.borderLess} text="Очистить" onClick={e => console.log('reset filters', e)} disabled={this.state.isFilterEmpty} />
            </div>
            <Button type={Button.type.primary} icon="icon-plus" text="Новый Кандидат" onClick={e => console.log('add applicant', e)} />
          </ContentHeaderLayout>

          <ContentLayout>
            {searchCount && <span className="font-14 m-b-10 inline-block">По вашему запросу найдено {searchCount} кандидата</span>}
            <Table sort={val => this.sort(val)} headers={['имя', 'специальзация, уровень', 'статус', 'контактное лицо', 'дата контакта']}>{
              candidatesList.map(rowData => (
                <Table.Row key={rowData.lastName + rowData.position}>
                  <Table.Cell
                    className="text-left"
                    cellType={Table.cellType.colorText}
                    text={`${rowData.firstName} ${rowData.firstName}`}
                    subText={rowData.city}
                  />
                  <Table.Cell
                    cellType={Table.cellType.socialData}
                    icons={[Table.socialNetwork[rowData.socialNetwork]]}
                    position={rowData.position}
                    level={rowData.level}
                  />
                  <Table.Cell
                    cellType={Table.cellType.status}
                    status={Table.status[rowData.status]}
                    tag={rowData.status}
                  />
                  <Table.Cell
                    cellType={Table.cellType.users}
                    users={rowData.managers.map(manager => manager.avatar)}
                  />
                  <Table.Cell
                    className="text-right"
                    cellType={Table.cellType.date}
                    date={rowData.dateOfContact}
                  />
                </Table.Row>
              ))
            }
            </Table>
          </ContentLayout>
        </section>
      </MainLayout>
    );
  }
}

export default CandidatesConnect(CandidatesPage);
