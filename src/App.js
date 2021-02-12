import { Component } from 'react';

import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    // super() helps inheriting all the functions or properties from React.Component
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      // By default, this will return all monsters even without the user input or searchField
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1 className='headerLogo'>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
