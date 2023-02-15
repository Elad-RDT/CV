import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useFormik } from "formik";


function Skills(props) {
    console.log(props);
    const {getSkills}=props;
    let skill="";
    

    return (
        <Card style={{ width: '70rem', height:'47rem', marginLeft:250, marginTop:25}} border="dark">
              <Card.Header className='bg-dark text-light' style={{height:"5rem"}}>
      <Card.Title style={{marginTop:20}}> Skills - Max of 12</Card.Title>
      </Card.Header>
      <br />
      <p>
        <div style={{marginLeft:50}}>
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))}>Communication skills</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Time management</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Leadership skills</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Interpersonal skills</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Teamwork skills</button>  
        </div>
        <br />
        <div style={{marginLeft:50}}>
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Problem-solving skills</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Critical thinking skills</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Creativity and innovation</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Digital literacy</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Adaptability and flexibility</button>  
        </div>
        <br />
        <div style={{marginLeft:50}}>
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Strong work ethic</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Attention to detail</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Conflict resolution</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Active listening</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Intercultural competence</button>  
        </div>
        <br />

        <div style={{marginLeft:50}}>
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Emotional intelligence</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Collaboration</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Organization Skills</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Presentation</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Writing and editing</button>  
        </div>
        <br />

        <div style={{marginLeft:50}}>
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Research and analysis</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Project management</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Decision making</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Strategic thinking</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Empathy</button>  
        </div>
        <br />

        <div style={{marginLeft:50}}>
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Initiative</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Customer service</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Sales and marketing</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Technical skills</button>  
      <button className="btn btn-outline-dark" style={{width:210}} onClick={(ev)=>(getSkills(ev))} >Development</button>  
        </div>
      </p>
      <div>

      <Link to="../lastName/occupation/address/phone/email/date/employment/education/profile/links">
          <Button
            className="btn btn-danger"
            style={{ marginTop:"5%", marginLeft:"5%", width:"20%"}}
            
            >
            Back
          </Button>
        </Link>
      <Link to="page"><Button className="primary"style={{ marginLeft:"50%", marginTop:"5%", width:"20%"}}>Next</Button></Link>
            </div>
        </Card>

)

}


export default Skills;
