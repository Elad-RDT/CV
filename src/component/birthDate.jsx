import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Date from './page.jsx';


function BirthDate(props) {

    let dateB="";
    let date2="";

    const check=(event)=>{
      if(dateB==''){
        event.preventDefault()
        console.log('hey');
        alert('the field is empty')
        return false
      }else{
        props.getInput(dateB)            }
    }
    
    return (
<div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:"100vh"}}>
      <Card style={{width: '30rem', height:'20rem'}} border="dark"> 
      <Card.Header className='bg-dark text-light'>
      <Card.Title> Enter your Birth Date</Card.Title>
      </Card.Header>
      <Card.Body>
       
        <Card.Text>
          <input type="date" name="" id=""  className="mb-3" style={{width:300, height:50, fontSize:30}}onChange={ev=> dateB=ev.target.value}/>
        {/* <InputGroup className="mb-3" style={{width:300}}>
        <InputGroup. id="basic-addon1">Date:</InputGroup>
        <Form.Control
          placeholder="DD/MM/YYYY"
          aria-label="Date"
          aria-describedby="basic-addon1"
          onKeyUp={ev=> dateB=ev.target.value}        />
      </InputGroup> */}
      <br />
  
        </Card.Text>
      </Card.Body>
      <div style={{display:"flex", justifyContent:'space-between', marginBottom:"5vh"}}>
        <Link to="../lastName/occupation/address/phone/email"><Button className="btn btn-danger" style={{marginLeft:"10vh"}} onClick={()=>props.getInput(date2)}>Back</Button></Link>
       <Link to="employment"><Button className="btn btn-primary" onClick={(event) => {check(event)}}  style={{marginRight:"10vh"}}>Next</Button></Link> 
        {/* <Button className="primary" style={{marginLeft:100, marginTop:50}} onClick={props.but=true}>Next</Button> */}
        </div>
    </Card>
    </div>
)}

export default BirthDate;
