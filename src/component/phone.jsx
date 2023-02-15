import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Phone(props) {
  let phone = "";
  let phone2="";

  
  const check=(event)=>{
    if(phone==''){
      event.preventDefault()
      console.log('hey');
      alert('the field is empty')
      return false
    }else{
      props.getInput(phone)         
          }
  }
  

  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:"100vh"}}>
    <Card style={{width: '30rem', height:'20rem'}} border="dark">
    <Card.Header className='bg-dark text-light'>
    <Card.Title> Enter your Phone</Card.Title>
    </Card.Header>
      <Card.Body>
        
        <Card.Text>
          <InputGroup className="mb-3" style={{ width: 300 }}>
            <InputGroup.Text id="basic-addon1"  className="bg bg-dark text-light">Phone:</InputGroup.Text>
            <Form.Control
              placeholder="(+972) 50-1234567"
              aria-label="Phone"
              aria-describedby="basic-addon1"
              onKeyUp={(ev) => (phone = ev.target.value)}
            />
          </InputGroup>
          <br />
        </Card.Text>
      </Card.Body>
      <div style={{display:"flex", justifyContent:'space-between', marginBottom:"5vh"}}>
<Link to="../lastName/occupation/address">
  <Button className="btn btn-danger" style={{marginLeft:"10vh"}} onClick={()=>props.getInput(phone2)}>Back</Button></Link>
<Link to="email"><Button className="primary"onClick={(event) => {check(event)}} style={{marginRight:"10vh"}}>Next</Button></Link>
  </div>
    </Card>
    </div>
  );
}

export default Phone;
