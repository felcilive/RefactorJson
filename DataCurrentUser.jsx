import React from 'react';
import data from './data/data.json';

class DataCurrentUser extends React.Component {
  getUserData = () => {
    const userData = data.filter((item) => item.login.includes(this.props.user))[0];
    return this.getShortInfo(userData);
  };

  getSubordinatesData = () => {
    const userData = this.getUserData();
    const { id } = userData;
    return data.filter((item) => item.resourceManager.id === id && item.id !== id && item.status === 'Regular');
  };

  getLocation = (arr) => {
    return arr.filter((location) => location.type.includes('OFFICE'))[0].name;
  };

  getShortInfo = (item) => {
    return {
      id: item.id,
      login: item.login,
      name: `${item.enName.firstName} ${item.enName.lastName}`,
      jobTitle: item.jobTitle,
      location: this.getLocation(item.locations),
    };
  };

  getRefactorSubordinatesData = () => {
    let dataSubordinates = this.getSubordinatesData();
    if (dataSubordinates.length) {
      dataSubordinates = dataSubordinates.map((item) => this.getShortInfo(item));
    } else {
      dataSubordinates = dataSubordinates.length;
    }
    return dataSubordinates;
  };

  componentDidMount = () => {
    const userData = this.getUserData();
    const dataSubordinates = this.getRefactorSubordinatesData();
    this.props.setInfoAboutUser(userData, dataSubordinates);
  };

  render() {
    return <></>;
  }
}

export default DataCurrentUser;
