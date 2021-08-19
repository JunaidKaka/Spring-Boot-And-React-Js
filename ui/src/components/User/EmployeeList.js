import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../services/index";
import axios from "axios";
import "./../../assets/css/Style.css";
import {
  Card,
  Table,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStepBackward,
  faFastBackward,
  faStepForward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentPage: 0,
      usersPerPage: 5,
      totalPages: 0,
    };

    this.fetchURL = this.fetchURL.bind(this);
  }

  componentDidMount () {
    this.fetchURL(this.state.activePage)
  }

  changePage = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value),
    });
  };

  firstPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: 1,
      });
    }
  };

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  lastPage = () => {
    if (
      this.state.currentPage > this.state.totalPages
    ) {
      let page = this.state.currentPage - 1 ;
      this.setState({
        currentPage: page,
      });
    }
  };

  nextPage = () => {
    console.log(this.state.currentPage +" < " + this.state.totalPages)
    if (
      this.state.currentPage < this.state.totalPages
    ) {
       this.fetchURL(this.state.currentPage);
    }
  };


  fetchURL(page) {
    if(page == undefined)
         page = 0;
    axios.get(`http://localhost:8080/rest/api/employee/findAll?page=${page}&size=5`)
      .then( response => {

          const totalPages = response.data.data.totalPages;
          const itemsCountPerPage = response.data.data.size;
          let  curentPage = response.data.data.pageable.pageNumber;
            curentPage = curentPage + 1 ;
          this.setState({totalPages: totalPages})
          this.setState({currentPage: curentPage})
          this.setState({usersPerPage: itemsCountPerPage})

          let results = this.state.users;
  
          if(response.data.data.content == 0 ) {
            this.setState({users: response.data.data.content});
          }  else {
            response.data.data.content.forEach(item=> {
              if(!results.includes(item)) {
              results.push(item)  
              }
          });
          this.setState({users: results});
        }
       //   
        }
      );
    }


  render() {
    const { users, currentPage, usersPerPage,totalPages } = this.state;
    const lastIndex = currentPage * usersPerPage;
    const firstIndex = lastIndex - usersPerPage;
    console.log(users);
    const currentUsers = users && users.slice(firstIndex, lastIndex);
    return (
      <div>
        
          <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>
              <FontAwesomeIcon icon={faUsers} /> User List
            </Card.Header>
            <Card.Body>
              <Table bordered hover striped variant="dark">
                <thead>
                  <tr>
                    <td> Name</td>
                    <td>Email</td>
                    <td>Salary</td>
                    <td>Phone Number</td>
                    <td>Hire Date</td>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr align="center">
                      <td colSpan="6">No Users Available</td>
                    </tr>
                  ) : (
                    
                    currentUsers.map((user, index) => (
                      <tr key={index}>
                        <td>
                          {user.firstName}   {user.lastName}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.salary}</td>
                        <td>{user.hireDate}</td>
                        <td>{user.phoneNumber}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Card.Body>
            {users.length > 0 ? (
              <Card.Footer>
                <div style={{ float: "left" }}>
                  Showing Page {currentPage} of {totalPages}
                </div>
                <div style={{ float: "right" }}>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <Button
                        type="button"
                        variant="outline-info"
                        disabled={currentPage === 1 ? true : false}
                        onClick={this.firstPage}
                      >
                        <FontAwesomeIcon icon={faFastBackward} /> First
                      </Button>
                      <Button
                        type="button"
                        variant="outline-info"
                        disabled={currentPage === 1 ? true : false}
                        onClick={this.prevPage}
                      >
                        <FontAwesomeIcon icon={faStepBackward} /> Prev
                      </Button>
                    </InputGroup.Prepend>
                    <FormControl
                      className={"page-num bg-dark"}
                      name="currentPage"
                      value={currentPage}
                      onChange={this.changePage}
                    />
                    <InputGroup.Append>
                      <Button
                        type="button"
                        variant="outline-info"
                        disabled={currentPage === totalPages ? true : false}
                        onClick={this.nextPage}
                      >
                        <FontAwesomeIcon icon={faStepForward} /> Next
                      </Button>
                      <Button
                        type="button"
                        variant="outline-info"
                        disabled={currentPage === totalPages ? true : false}
                        onClick={this.lastPage}
                      >
                        <FontAwesomeIcon icon={faFastForward} /> Last
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </Card.Footer>
            ) : null}
          </Card>
       
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {

//   return {
//     fetchUsers: (page) => dispatch(fetchUsers(page)),
//   };
// };


export default EmployeeList;
