import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/serach-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      serachField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const serachField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { serachField };
    });
  }

  render() {

    const { monsters, serachField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(serachField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox className='monsters-serach-box' onChangeHandler={onSearchChange} placeholder='Serach monsters' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;