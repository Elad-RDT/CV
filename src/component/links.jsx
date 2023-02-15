import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Links(props) {
  let links = "";
  let links2 = "";
  console.log(props)

  return (
    <Card
      style={{
        width: "30rem",
        height: "20rem",
        marginLeft: 550,
        marginTop: 200,
      }}
      border="dark"
    >
      <Card.Header className="bg-dark text-light">
        <Card.Title>Links - Up to 5</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <InputGroup className="mb-3" style={{ width: 300, marginLeft:60 }}>
            <InputGroup.Text id="basic-addon1" className="text-white bg-dark">Link:</InputGroup.Text>
            <Form.Control
              placeholder="example: https://github.com/ "
              aria-label="Links"
              aria-describedby="basic-addon1"
              onKeyUp={(ev) => (links = ev.target.value)}
            />
          </InputGroup>
          <br />
        </Card.Text>
        <Link to="../lastName/occupation/address/phone/email/date/employment/education/profile">
          <Button
            className="btn btn-danger"
            style={{marginTop:100}}
            onClick={() => props.getLinks(links2)}
          >
            Back
          </Button>
        </Link>


        <button
          className="btn btn-success"
          onClick={() => props.getLinks(links) }
        style={{marginLeft:120, marginTop:100}}>
          Submit
        </button>
        
        



        <Link to="skills">
          <Button
            className="primary"
            
            style={{marginLeft:130, marginTop:100}}
          >
            Next
          </Button>
        </Link>
        {/* <Button className="primary" style={{marginLeft:100, marginTop:50}} onClick={props.but=true}>Next</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Links;
