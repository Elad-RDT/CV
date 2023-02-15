
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

function CVForm(props) {
    // const{arr,att,getInput}=this.props;
    let firstname="";


    const check=(event)=>{
      if(firstname==''){
        event.preventDefault()
        console.log('hey');
        alert('the field is empty')
        return false
      }else{
        props.getInput(firstname)
      }
    }
    
    return (  
      <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:"100vh"}}>
      <Card style={{width: '30rem', height:'20rem'}} border="dark">
        <Card.Header className='bg-dark text-light'>
        <Card.Title> Enter your name</Card.Title>
        </Card.Header>
      <Card.Body>
        {/* <Card.Title> Enter your name</Card.Title> */}
        <Card.Text>
        <InputGroup className="mb-3" style={{width:300}} >
        <InputGroup.Text id="basic-addon1" className='bg-dark text-light'>First name:</InputGroup.Text>
        <Form.Control
          placeholder="First Name"
          aria-label="First Name"
          aria-describedby="basic-addon1"
          onKeyUp={ev=> firstname=ev.target.value} 
                 />
      </InputGroup>
      <br />
  
        </Card.Text>
        
      </Card.Body>
      <div style={{display:"flex", justifyContent:'center'}}>

        <Link to='lastName'>
          <Button className="primary" onClick={(event) => {check(event)}} style={{}}>Next</Button>
          </Link>
        {/* <Button className="primary" style={{marginLeft:100, marginTop:50}} onClick={props.but=true}>Next</Button> */}
        </div>
    </Card>
          </div>
          
)}
export default CVForm;




