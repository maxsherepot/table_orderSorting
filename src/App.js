import React, { Component } from 'react';
import Loader from './components/Loader/Loader';
import Table from './components/Table';
import _ from "lodash";


class App extends Component {

  state = {
    data: [],
    loading: true,
    sortOrder: "asc",
    sortField: "id"
  }


  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(data => this.setState({
          data: _.orderBy(data, this.state.sortField, this.state.sortOrder),
          loading: false
        }))
    }, 0)
  }



  onSort = (sortField) => {
    const dataClone = this.state.data.concat();
    const orderedData = _.orderBy(dataClone, sortField, this.state.sortOrder);
    this.setState({
      data: orderedData,
      sortField,
      sortOrder: this.state.sortOrder === "asc" ? "desc" : "asc"
    })
    //console.log(event.target)

  }



  render() {
    //console.log(this.state.data)

    const { sortField, sortOrder, data, loading } = this.state;

    return (
      <div className="container">

        {loading ? <Loader /> :
          <Table
            sortField={sortField}
            sortOrder={sortOrder}
            onSort={this.onSort}
            data={data}
          />}
      </div>
    )
  }
}



export default App;
