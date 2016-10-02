import React, { Component } from 'react';
import { Router } from 'react-router';
import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactFire';
import reactMixin from 'react-mixin';
import Firebase from 'firebase';
import firebaseConfig from '../env/firebase';
import helpers from '../util/helper';

const rootRef = Firebase.initializeApp(firebaseConfig).database();
class Profile extends Component {

  constructor() {
    super();
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  };


  init(username) {
    this.childRef= rootRef.ref(username);
    this.bindAsArray(this.childRef, 'notes');

    helpers.getGithubInfo(username)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
      });
    
  }

  componentDidMount() {
    this.init(this.props.params.username);
  }

  componentWillReceiveProps(nextProps) {
    this.unbind('notes');
    this.init(nextProps.params.username);
  }

  componentWillUnmount() {
    this.unbind('notes');
  }

  handleAddNote(note) {
    rootRef.ref(this.props.params.username).child(this.state.notes.length).set(note)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes 
            username={this.props.params.username} 
            notes={this.state.notes}
            addNote={this.handleAddNote.bind(this)}/>
        </div>
      </div>   
    );
  }
};  
  
reactMixin(Profile.prototype, ReactFireMixin);
export default Profile;