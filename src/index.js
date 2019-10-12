import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './seasonDisplay';
import Loader from './Loader';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => {
//       console.log(position);
//     },
//     err => {
//       console.log(err);
//     }
//   );

//   return <div>Heys!!</div>;
// };

class App extends React.Component {


  constructor(props) {

    // Best for initializations only

    super(props); // Parent Class Constructor - alaways the first thing to be called
    this.state = {latitude:null , erroMessage:''};

  }

  componentDidMount() {
    // console.log('Firing up our component...');

    // Best for data-loading / API request (i.e. to happen once) etc. 
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // console.log(position.coords.latitude);
        this.setState({
          latitude: position.coords.latitude
        })
      },
      err => {
        console.log(err);
        this.setState({
          errorMessage: err.message
        })
      }
    );


  }

  componentDidUpdate() {
    // Best when we want to make API request(s) repeatedly say on button click 
    // Whenever user updates / add input to any input field
    // When we get new props from parent component
    console.log('Geo Location retrieved...');
  }

  renderContent() {

    if(this.state.latitude && !this.state.errorMessage) {

      return <SeasonDisplay latitude={this.state.latitude}/>

    }

    if(this.state.errorMessage && !this.state.latitude) {

      return <div>{this.state.errorMessage}</div>

    }

    return <Loader loaderText="Please accept the location request..."/>


  }

  render  () {
    // Why it didn't go into recursive loop i.e. If geolocation is invoked
    // within render method?

    // Make render function as neat as it can (i.e. use simple return)
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )


  }

}


ReactDOM.render(<App />, document.querySelector("#root"));
