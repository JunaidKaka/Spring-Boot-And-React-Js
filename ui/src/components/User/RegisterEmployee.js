import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLock,
  faUndo,
  faUserPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { registerUser } from "../../services/index";
import MyToast from "../MyToast";

const RegisterEmployee = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");


  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    phoneNumber: "",
    errormessage: "saasas",
  };

  const [user, setUser] = useState(initialState);

  const userChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const dispatch = useDispatch();

  
  const saveUser = () => {
    let phoneNumber = initialState.phoneNumber;

    if (!Number(phoneNumber)) {
      initialState.errormessage = "SOME ERROR "
      return
    }

    dispatch(registerUser(user))
      .then((response) => {
        setShow(true);
        setMessage(response.message);
        resetRegisterForm();
        setTimeout(() => {
          setShow(false);
          props.history.push("/users");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  const resetRegisterForm = () => {

    setUser(initialState);

  };

  let errors = [];
  errors.push("asdsdds")

  return (
    <div>
      <div style={{ display: show ? "block" : "none" }}>
        <MyToast show={show} message={message} type={"success"} />
      </div>
      <Row className="justify-content-md-center">
        <Col xs={5}>
          <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>
              <FontAwesomeIcon icon={faUserPlus} /> Register 
            </Card.Header>
            <div>
    {(errors.length == 0
        ? <div>Showing true item</div>     
        : <div>Never showing false item</div>
    )}
          </div>

            <Card.Body>
              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
  
                      type="text"
                      name="firstName"
                      value={user.firstName}
                      onChange={userChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter Name"
                    />
                  </InputGroup>
                </Form.Group>
         
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      autoComplete="off"
                      type="text"
                      name="lastName"
                      value={user.lastName}
                      onChange={userChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter Last Name"
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>


              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      required
                      autoComplete="off"
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={userChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter Email Address"
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
      
              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faPhone} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      autoComplete="off"
                      type="text"
                      name="phoneNumber"
                      value={user.phoneNumber}
                      onChange={userChange}
                      className={"bg-dark text-white"}
                      placeholder="Enter Mobile Number"
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button
                size="sm"
                type="button"
                variant="success"
                onClick={saveUser}
              >
                <FontAwesomeIcon icon={faUserPlus} /> Register
              </Button>{" "}
              <Button
                size="sm"
                type="button"
                variant="info"
                onClick={resetRegisterForm}
              >
                <FontAwesomeIcon icon={faUndo} /> Reset
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};



export default RegisterEmployee;
