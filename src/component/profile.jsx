import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function Profile(props) {

    let profile="";
    let profile2="";
    
    return (
      <Card style={{ width: '50rem', height:'40rem', marginLeft:450, marginTop:60, backgroundColor:"whitesmoke"}} border="dark">
      <Card.Header className='bg-dark text-light'>
      <Card.Title> About Yourself:</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
    <label for="exampleFormControlTextarea1" style={{fontSize:20}}><b>Proffesional Summery</b></label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" style={{resize:"none"}} onKeyUp={ev=> profile=ev.target.value} maxLength={400}></textarea>
        </Card.Text>
        <Link to="../lastName/occupation/address/phone/email/date/employment"><Button className="btn btn-danger" style={{marginLeft:100, marginTop:50, width:200, height:50}} onClick={()=>props.getInput(profile2)}>Back</Button></Link>
        <Link to="links"><Button className="primary" onClick={() => props.getInput(profile)}  style={{marginLeft:150, marginTop:50, width:200, height:50}}>Next</Button></Link>
        {/* <Button className="primary" style={{marginLeft:100, marginTop:50}} onClick={props.but=true}>Next</Button> */}
      </Card.Body>
    </Card>
)}

export default Profile;

