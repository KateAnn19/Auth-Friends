import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import FriendsForm from "./FriendsForm";
import Friend from "./Friend";

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.getData = this.getData.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.deleteFriend = this.deleteFriend.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        this.setState({
          list: res.data,
        });
      })
      .catch((err) => console.log(err.response));
  };

  addFriend = (data) => {
    axiosWithAuth()
      .post("/api/friends", data)
      .then((res) => {
        console.log(res.data);
        this.setState({
          list: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  deleteFriend = (id) => {
      console.log(id)
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then((res) => {
          console.log('res', res)
        this.setState({
          list: this.state.list.filter((f) => f.id !== id),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateFriends = (data, id) => {
    console.log("this is data inside update", data)
      axiosWithAuth()
        .put(`api/friends/${id}`,data) //{
        //    name: data.name,
        //    email: data.email,
        //    age: data.age
        //})
        .then(res => {
          console.log("THIS IS INSIDE UPDATE",res);
          this.setState({

            list: res.data
            //   name: data.name,
            //   email: data.email,
            //   age: data.age
          })
          
        })
        .catch(err => {
            console.log(err)
        })
    };


  render() {
    return (
      <div>
        <h1>Friends</h1>
        <div className="Friends">
          {this.state.list.map((friend) => (
            <Friend
              remove={this.deleteFriend}
              email={friend.email}
              age={friend.age}
              name={friend.name}
              key={friend.id}
              id={friend.id}
              update={this.updateFriends}
            />
          ))}
        </div>
        <FriendsForm addFriend={this.addFriend} friends={this.state.list} />
      </div>
    );
  }
}

export default FriendsList;
