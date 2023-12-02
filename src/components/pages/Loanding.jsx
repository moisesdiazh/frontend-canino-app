import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Loading.css"

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinnerState: true,
    };
  }

  render() {
    return (
      <div className="divFather">
        <div className="divSon">
          <Spinner color="primary" className="spinnerReactstrap" />
        </div>
      </div>
    );
  }
}
export default Loading;