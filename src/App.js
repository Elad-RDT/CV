import { Routes, Route} from "react-router-dom";
import React, { Component } from 'react';
import CVForm from "./component/cv";
import LastName from './component/lastName';
import Occupation from './component/occupation'
import Address from "./component/address";
import Phone from "./component/phone";
import Email from './component/email';
import BirthDate from "./component/birthDate";
import Page from "./component/page.jsx";
import Employment from "./component/employment";
import Education from './component/education';
import Profile from './component/profile';
import Links from './component/links';
import Skills from './component/skills';
import  jsPDF  from "jspdf";
import html2canvas from "html2canvas";

class App extends Component {
    state={
        arr:[], 
        arrEmployment:[],
        arrEducation:[],
        arrLinks:[],
        arrSkills:[]
        
        
      
    }
    render() {

        return (
            <React.Fragment>
                <Routes>
                    <Route exact path="/" element={<CVForm getInput={(ev)=>this.getInput(ev)} />}></Route>
                    <Route exact path="/lastName" element={<LastName getInput={(ev)=>this.getInput(ev)}/>}></Route>
                    <Route exact path="/lastname/occupation" element={<Occupation getInput={(ev)=>this.getInput(ev)}/>}></Route>
                    <Route exact path="/lastName/occupation/address" element={<Address getInput={(ev)=>this.getInput(ev)}/>}></Route>
                    <Route exact path="/lastName/occupation/address/phone" element={<Phone getInput={(ev)=>this.getInput(ev)}/>}></Route>
                    <Route exact path="/lastName/occupation/address/phone/email" element={<Email getInput={(ev)=>this.getInput(ev)} />}></Route>
                    <Route exact path="/lastName/occupation/address/phone/email/date" element={<BirthDate getInput={(ev)=>this.getInput(ev)}/>}></Route>
                    <Route exact path="/lastName/occupation/address/phone/email/date/employment" element={<Employment addEmployment={(event, val) => this.addEmployment(event, val)}/>}></Route>
                    <Route exact path="/lastName/occupation/address/phone/email/date/employment/education" element={<Education addEducation={(event, val) => this.addEducation(event, val)}/>}></Route>
                    <Route exact path="/lastName/occupation/address/phone/email/date/employment/education/profile" element={<Profile getInput={(ev)=>this.getInput(ev)}/>}></Route>
                    <Route exact path="/lastName/occupation/address/phone/email/date/employment/education/profile/links" element={<Links getLinks={(ev)=>this.getLinks(ev)}/>}></Route>
                    <Route exact path="/lastName/occupation/address/phone/email/date/employment/education/profile/links/skills" element={<Skills getSkills={(ev)=>this.getSkills(ev)}/>}></Route>
                    <Route exact path="/lastName/occupation/address/phone/email/date/employment/education/profile/links/skills/page" element={<Page arr={this.state.arr} arrEmployment={this.state.arrEmployment} arrEducation={this.state.arrEducation} arrLinks={this.state.arrLinks} arrSkills={this.state.arrSkills} cvToPDF={this.cvToPDF}/>}></Route>
                </Routes>
                </React.Fragment>    
                    );
    }
    
getInput = (ev) => {
    if(ev==''){
        this.state.arr.pop();
        this.setState({arr:this.state.arr});
        console.log(this.state.arr);
    }else{
  console.log(ev)
this.state.arr.push(ev);
this.setState({arr:this.state.arr})
console.log(this.state.arr)
    }
}


addEmployment = (event, val) => {
    console.log("hi");
    const newEmployment = {
        jobTitle: val.jobTitle,
        employer: val.employer,
        startDate: val.startDate,
        endDate: val.endDate,
        city:val.city,
    };
    console.log(newEmployment);
    this.state.arrEmployment.push(newEmployment);
    this.setState({ arrEmployment: this.state.arrEmployment });
    console.log("ArrEmployment: " + this.state.arrEmployment);
}


addEducation = (event, val) => {
    console.log("hi");
    const newEducation = {
        school: val.school,
        degree: val.degree,
        startDate: val.startDate,
        endDate: val.endDate,
        city:val.city,
    };
    console.log(newEducation);
    this.state.arrEducation.push(newEducation);
    this.setState({ arrEducation: this.state.arrEducation });
    console.log("ArrEducation: " + this.state.arrEducation);
}


getLinks= (ev) => {
    if(this.state.arrLinks.length < 5){
        if(ev==''){
            this.state.arrLinks.pop();
            this.setState({arrLink:this.state.arrLinks});
            console.log(this.state.arrLinks);
        }else{
      console.log(ev)
    this.state.arrLinks.push(ev);
    this.setState({arrLinks:this.state.arrLinks})
    console.log(this.state.arrLinks)
        }
    }else{
        alert("Max of 5 links allowed")
    }
}

getSkills=(ev)=>{
    if(this.state.arrSkills.length < 12){
        console.table(ev.target.className)
        if(ev.target.className=="btn btn-outline-dark"){
            ev.target.className="btn btn-dark"
            console.table(ev.target.className)
            this.state.arrSkills.push(ev.target.innerHTML);
            this.setState({arrSkills:this.state.arrSkills});
            console.log(this.state.arrSkills);

        }else{
            console.log(ev.target.className)
            ev.target.className="btn btn-outline-dark"
            for(let i=0; i<this.state.arrSkills.length; i++){
                console.log(this.state.arrSkills[i])
                if(ev.target.innerHTML==this.state.arrSkills[i]){
                    this.state.arrSkills.splice(i,1);
                }
            }
            this.setState({arrSkills:this.state.arrSkills})
            console.log(this.state.arrSkills);
        }
    } else {
        alert("Max of 12 skills");
    } 
    
}

cvToPDF=async (numOfPages)=>{
    // // window.print()
    console.log("Num of pages for cv to pdf func",  numOfPages)
    //document.getElementById('#page').style.margin = "0px" // error ?

    var currentElementId, data;
    var pdf = new jsPDF('p', 'px', [1100,800]);
    var width = pdf.internal.pageSize.getWidth();
    var height = pdf.internal.pageSize.getHeight();

    for(let i = 0; i < numOfPages; i++){
        currentElementId = "page"+(i+1); //"father"
        data = document.getElementById(currentElementId);
        var canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 1125;
        var options = {
            canvas: canvas,
            scale: 1,
            width: 950,
            height: 1340,
            windowHeight: 1280,
            windowWidth: 1920,
        };
        console.log("ElementId", currentElementId)
        console.log("ElementData", data)
        
        await html2canvas(data, options).then((canvasa) => {
            console.log("html2canvas with data:", data);
            const contentDataURL = canvasa.toDataURL('image/png');
            pdf.addImage(contentDataURL, 'PNG', 1,  1, width, height);
        });
        if( i < (numOfPages -1))
            pdf.addPage();
    }
    pdf.save('CV');
}

}







export default App;
