import React from 'react';
import DataCurrentUser from './DataCurrentUser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: 'v.barysevich', dataUser: '', dataSubordinates: '', hasSubordinates: false };
  }

  setInfoAboutUser = (dataUser, dataSubordinates) => {
    if (dataSubordinates) {
      this.setState({ dataUser, dataSubordinates, hasSubordinates: true });
    } else {
      this.setState({ dataUser, hasSubordinates: false });
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <DataCurrentUser user={this.state.user} setInfoAboutUser={this.setInfoAboutUser} />
      </div>
    );
  }
}

export default App;
// a.semikov
// v.barysevich
// k.krasouski
