import React from "react";


const inlinecss={
  color:"white",

};


class Classfun extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

 

  
  render() {
    return (
      <>
        <div className="boxx2">
          <button
            className="btn2"
            onClick={() => {
              this.setState({ show: ! this.state.show });
            }}
          >
            To see styling in Class component
          </button>

          {this.state.show ? (
            <div className="box2">
              <h1 className="b1">This is created using Class Component</h1>
              <p className="b2">This is done using external Css</p>
              <p className="b3" style={inlinecss}>This is done using internal Css</p>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
export default Classfun;
