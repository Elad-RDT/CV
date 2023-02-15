import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function Address(props) {

    let address="";
    let address2="";

    const check=(event)=>{
      if(address==''){
        event.preventDefault()
        console.log('hey');
        alert('the field is empty')
        return false
      }else{
        props.getInput(address)
                 }
    }
    
    return (
      <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:"100vh"}}>
      <Card style={{width: '30rem', height:'20rem'}} border="dark">
      <Card.Header className='bg-dark text-light'>
      <Card.Title> Enter your Address</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
        <InputGroup className="mb-3" style={{width:300}}>
        <InputGroup.Text id="basic-addon1"  className="bg-dark text-light">Address:</InputGroup.Text>
        <Form.Control
          placeholder="Address- street/city/state"
          aria-label="Address"
          aria-describedby="basic-addon1"
          onKeyUp={ev=> address=ev.target.value}        />
      </InputGroup>
      <br />
  
        </Card.Text>
      </Card.Body>
      <div style={{display:"flex", justifyContent:'space-between', marginBottom:"5vh"}}>
        <Link to="../"><Button className=" btn btn-danger" style={{marginLeft:"10vh"}} onClick={()=>props.getInput(address2)}>Back</Button></Link>
        <Link to="phone"><Button className="primary" onClick={(event) => {check(event)}}  style={{marginRight:"10vh"}}>Next</Button></Link>
        {/* <Button className="primary" style={{marginLeft:100, marginTop:50}} onClick={props.but=true}>Next</Button> */}
        </div>
    </Card>
    </div>
)}

export default Address;
