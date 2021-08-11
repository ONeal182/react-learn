import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panael'
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn react1', important: true, id: 'qwqer'},
                {label: 'Going to learn react2', important: false, id: 'qwqke'},
                {label: 'Going to learn react3', important: false, id: 'qwqe123'},
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before,...after];

            return {
                data:newArr
            }
        })
    }

    render(){
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                posts={this.state.data}
                onDelete={this.deleteItem}
                />
                <PostAddForm/>
            </div>
        )
    }
}

// export default App;