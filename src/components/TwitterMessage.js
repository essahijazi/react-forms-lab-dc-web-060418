import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainingChars: this.props.maxChars
    };
  }

  changeHandler = (event) => {
    this.setState({
      value: event.target.value,
      remainingChars: this.state.remainingChars - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.changeHandler}/>
        {/* {this.props.maxChars - this.state.value.length} */}
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
