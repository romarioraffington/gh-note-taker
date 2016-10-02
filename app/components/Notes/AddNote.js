import React, {Component} from 'react';

class AddNote extends Component {

  handleSubmit() {
    const note = this.note;
    if(note.value.length) {
      this.props.addNote(note.value);
      this.note.value = '';
    }
  }
  
  render() {
    return (
      <div className='input-group'>
        <input type="text" className='form-control' placeholder='Add new note' ref={(ref) => this.note = ref} />
        <span className="input-group-btn">
          <button className="btn btn-default" type='button' onClick={this.handleSubmit.bind(this)}>Submit</button>
        </span>
      </div>
    );
  }
};

React.propTypes = {
  username: React.PropTypes.string.isRequied,
  addNote: React.PropTypes.func.isRequired
}
export default AddNote;