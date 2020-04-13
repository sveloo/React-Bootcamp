import React from "react";
import ReactPlayer from "react-player";
import "./App.css";

class App extends React.Component {
  state = {
    url: "https://www.youtube.com/watch?v=ug50zmP9I7s",
  };

  update = (e) => {
    this.setState({
      url: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <ReactPlayer url={this.state.url} />
            <p>
              <input
                className="input"
                onChange={this.update}
                type="text"
                placeholder=""
              />
            </p>
            Paste a YouTube URL and watch the video
          </header>
        </div>
      </>
    );
  }
}

export default App;
