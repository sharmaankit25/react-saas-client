import React, { Component } from 'react';
import axios from "axios";

class Home extends Component {
    state = {
        todos:[],
        token:"",
        username:"",
        password:""
    }
    componentDidMount(){
        axios.get('/api/todos')
        .then((response) => {
            this.setState({todos:[...response.data]});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    renderTodos = () => {
        if(this.state.todos.length > 0){
            return this.state.todos.map((todo)=>{
                console.log(todo.title);
                return (<li key={todo.id}>{todo.title} -- {todo.status} -- {todo.due_date}</li>);
            });
        }
        
    }

    login = (e) => {
        e.preventDefault();
        console.log("Logging in");
    }

    render(){
        return (
            <div>
                <h3>Enter School</h3>
                <form>
                <input type="text" placeholder="Enter url"/>
                <button>Submit</button>
                </form>
                <h3>Login</h3>
                <form onSubmit={e => this.login(e)}>
                    Username : <input type="text" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} />
                    Password : <input type="text" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} />
                    <button>Login</button>
                </form>
                <h3>Todos</h3>
                <ul>
                    {this.renderTodos()}
                </ul>
            </div>
        )
    }
}

export default Home;