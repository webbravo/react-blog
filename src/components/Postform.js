import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  render() {
    return (
      <div>
        <h1>Add posts</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              id="title"
              name="title"
              type="text"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <br />
            <textarea
              id="body"
              name="body"
              type="text"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
