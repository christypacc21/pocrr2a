import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemsDeleteData } from '../actions/items';


class ItemList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         items: [],
    //         hasErrored: false,
    //         isLoading: false
    //     };
    // }
    
    // fetchData(url) {
    //   this.setState({isLoading: true});
    //   fetch(url)
    //     .then(res => {
    //       if(!res.ok) {
    //         throw Error(res.statusText);
    //       }
    //       this.setState({isLoading: false})
    //       return res;
    //     })
    //    .then(res => res.json())
    //    .then(items => {
    //      this.setState({items, isLoading: false})
    //     //  return res.status(400).json({res})
    //     })
    //    .catch(() => this.setState({hasErrored:true}));
    // }

    componentDidMount() {
      this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={item.id}>
                        {item.label}
                        {/* {item.id} */}
                        <button onClick={() => this.props.deleteData(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    isLoading: state.isLoading,
    hasErrored: state.hasErrored
  }
}

const mapDispatchToProps = ((dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    deleteData: (items) => dispatch(itemsDeleteData(items))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(ItemList);
