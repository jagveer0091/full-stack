import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Comment extends Component {
        state={
            comment: [ ]
        }
        componentDidMount(){
            console.log(this.props);
            let id = this.props.match.params.comment_id;
            axios.get('https://jsonplaceholder.typicode.com/comments/' + id).then(res =>{
             this.setState({
                 comment: res.data
             })
//                console.log(this.state);
            })
        }
    
    render() {
        const comment = this.state.comment ? (
            <div className='comment card'>
                <div className='center card-title'>{this.state.comment.name} </div>
             
                <ul className='center'>
                    <li>{this.state.comment.id}</li>
                    <li>{this.state.comment.email}</li>
                    <li>{this.state.comment.body}</li>
                    {this.state.comment.id % 2===0 ? <img className="image1" src="http://cdn.24.co.za/files/Cms/General/d/4320/28d1220097b54f79907f2d810b51ad0b.jpg" alt="oops! not found!" /> : <img className="image1" src="https://www.htxt.co.za/wp-content/uploads/2014/11/GAME-OF-THRONES.jpg" alt="oops! not found!" />}
                </ul>
                
            </div>
        ) : ( <p> Loading comments.........</p> )
             
        return(
            <div className='container'>
                {comment}
            </div>
        )
    }
}
export default Comment;