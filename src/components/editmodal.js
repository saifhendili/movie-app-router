import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from 'react-redux'
import {editmovie} from '../js/actions/creactactions'
// import Add from "./images/main1.png";
const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "520",
    width: "330",
    backgroundColor: "#1c1e21",
    color: "white"
  }
};

class Form extends Component {
  state = {
    isOpen: false,
   movie:{},
   rating:''
  };

  handleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  closeModal = () => this.setState({ isOpen: false });
  handleChange = e =>
    this.setState({
      movie: { ...this.state.movie, [e.target.name]: e.target.value }
    });
  handleChangeRating = e => {
    var regexp = /^[1-5]$/;
    if (regexp.test(e.target.value[0])) {
      this.setState({
        rating: e.target.value,
        movie: { ...this.state.movie, rating: e.target.value }
      });
    } else {
      this.setState({
        rating: "",
        movie: { ...this.state.movie, rating: "" }
      });
    }
  };
  render() {
 
    return (
      <div>
     
 <button
          className="butt buttoption"
          onClick={this.handleOpen}
        >Edit</button>
        <Modal
          style={customStyles}
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
        >
          <form
            className="myForm"
            onSubmit={e => {
              e.preventDefault();
              this.setState({ isOpen: false });
            }}
          >
            <label style={{ margin: "15px" }}>Movie Name </label>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              style={{
                margin: "15px",
                padding: "13px 40px",
                borderRadius: "5px"
              }}
            />

            <label style={{ margin: "15px" }}>Rating</label>
            <input
              type="text"
              name="rating"
              value={this.props.title}
              onChange={this.handleChangeRating}
              maxLength={1}
              style={{
                margin: "15px",
                padding: "13px 40px",
                borderRadius: "5px"
              }}
            />
            <label style={{ margin: "15px" }}>Image</label>
            <input
              type="text"
              name="lien"
              onChange={this.handleChange}
              style={{
                margin: "15px",
                padding: "13px 40px",
                borderRadius: "5px"
              }}
            />
            <button
             onClick={() => {
                this.props.editmovie({
                  id: this.props.id,
                  newMovie: this.state.movie
                })}}
            //   onClick={this.onSubmit}
              style={{
                margin: "25px 50px",
                padding: "15px 35px",
                borderRadius: "5px"
              }}
            >
              Submit
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
     movie: state.movieliste });

const mapDispatchToProps = dispatch => {
  return {
    editmovie: payload => {
      dispatch(editmovie(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);