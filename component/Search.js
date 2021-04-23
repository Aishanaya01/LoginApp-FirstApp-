import { SearchBar } from 'react-native-elements';

const Search = () => {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }

export default Search;