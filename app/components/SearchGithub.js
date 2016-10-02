var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleSubmit: function(){
    const username = this.usernameRef.value;
    if(username.length){ 
      this.usernameRef.value = '';
      this.context.router.push(`/profile/${username}`);
    }
  },
  render: function(){
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.usernameRef = ref} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchGithub;