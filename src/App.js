import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Button } from 'antd';
import './App.css';

import Strategies from './strategies/components/Strategies';
import MovieListContainer from './movies/components/MovieListContainer';
import { UserContext, User } from './shared/context/UserContext';
import { ActionsContext } from './shared/context/ActionsContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setActions = (actionItems) => {
      this.setState(state => ({
        actionItems,
      }));
    }
    this.state = {
      user: User,
      actionItems: [],
      setActions: this.setActions,
    };
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <ActionsContext.Provider value={this.state.setActions}>
          <Router>
            <div className="App">

              <header className="Route-header">
                <Row>
                  <Col span={8}>
                    <Link to="/strategies"><h1 className="Route-title">Strategies</h1></Link>
                    <Link to="/movies"><h1 className="Route-title">Movies</h1></Link>
                  </Col>
                  <Col span={8} offset={8} align="right">
                    {this.state.actionItems.map((a) => <Button key={a.name} style={{ border: 'none' }} ghost onClick={a.onClick}>{a.name}</Button>)}
                  </Col>
                </Row>
              </header>

              <hr />
              <div className="Route-body" >
                <Route path="/strategies" component={Strategies} />
                <Route path="/movies" component={MovieListContainer} />
              </div>
            </div>
          </Router>
        </ActionsContext.Provider>
      </UserContext.Provider >
    )
  }
}

App.defaultProps = {
  currentUser: { id: 'user1', username: 'arandekar', full_name: 'Aran Dekar', avatar_url: 'https://material-ui-1dab0.firebaseapp.com/build/fa158bc2d4774f4ae14cbbec7730af23.jpg' },
}

export default App;
