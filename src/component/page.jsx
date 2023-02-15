import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "../page.css";
import PageContent from "./pageContent";

function Page(props) {
  const { arr, arrEmployment, arrEducation, arrLinks, cvToPDF, arrSkills } =
    props;
  const t = [
    "Strong work ethic",
    "Emotional intelligence",
    "Research and analysis",
    "Initiative",
    "Customer service",
    "Project management",
    "Collaboration",
    "Attention to detail",
    "Critical thinking skills",
    "Time management",
    "Leadership skills",
    "Creativity and innovation",
    "Creativity and innovation",
  ];
  const arrM = [
    "Or",
    "Nachmias",
    "Devops",
    "Tarshish 18, Modi'in",
    "0549255860",
    "nachmiasor@gmail.com",
    "2000-12-06",
    "saaaaaaaaaaa   aaaaaaaaaaaaaaaaaa aaaaaaaaE  aaaaaaaa aaaaaaaaaaaaaa   sdasd1 aaaaaa aaaaaaa aaaa asdaasdasadaaa aaaaaaaaaaa sadasda sdas d2asdasadasdaasaE asdasdasdasdasdasda sd1asdaa sdasadasada sdasda sd2asdasadasdaasaE",
  ];

  const arrE = [
    {
      school: "1",
      degree: "asdasdasd",
      startDate: "2022-12-17",
      endDate: "2022-11-28",
      city: "asdasdasd",
    },
    {
      school: "3",
      degree: "asdasdasd",
      startDate: "2022-12-17",
      endDate: "2022-11-28",
      city: "asdasdasd",
    },
    {
      school: "4",
      degree: "asdasdasd",
      startDate: "2022-12-17",
      endDate: "2022-11-28",
      city: "asdasdasd",
    }
  ];
  const arrEm = [
    {
      jobTitle: "1",
      employer: "SeeTrue",
      startDate: "2022-12-16",
      endDate: "2022-12-08",
      city: "TLV",
    },
    {
      jobTitle: "3",
      employer: "SeeTrue",
      startDate: "2022-12-16",
      endDate: "2022-12-08",
      city: "TLV",
    },
    {
      jobTitle: "4",
      employer: "SeeTrue",
      startDate: "2022-12-16",
      endDate: "2022-12-08",
      city: "TLV",
    },
    {
      jobTitle: "5",
      employer: "SeeTrue",
      startDate: "2022-12-16",
      endDate: "2022-12-08",
      city: "TLV",
    },

  ];
  const arrL = [
    " https://github.com/coolMe",
    " https://twitter.com/Skip",
    " https://linkedin.com/or123",
    " https://mysite.com/aboutme",
    " https://insta.com/ornachmias",
  ];
  let partPerPage = 7;
  const numOfPages = Math.ceil((arrEducation.length + arrEmployment.length - 5) / partPerPage + 1);
  let IdxLast = 0,IdxFirst  = 0;
  console.log("NumOfPages", numOfPages);
  const TotalArr = [...arrEducation,...arrEmployment];
  console.log("Total arr", TotalArr);
  let startEmployment=Math.ceil((arrEducation.length - 5)/partPerPage + 1)
  console.log("start Employment", startEmployment)
  return (
    <React.Fragment>
      <div className="container text-left">
        <br />
        {[...Array(numOfPages)].map((x, i) => {
          IdxFirst = IdxLast; // 0 6 13
          IdxLast = (i+1)*partPerPage - 2; // 5 12 19
          console.log("IdxFirst", IdxFirst, "IdxLast", IdxLast)
          return (
            <PageContent
              id={i + 1}
              arr={arr}
              TotalArr={TotalArr.slice(IdxFirst,IdxLast)}
              arrLinks={arrLinks}
              arrSkills={arrSkills}
              startEmployment={startEmployment}
              numOfPages={numOfPages}
            />
          );
        })}
      </div>
      {/* {[...Array(100)].map((x, i) => {
          var currentImage = "https://images-na.ssl-images-amazon.com/images/G/01/error/"  + (i+1) 
          return (
              <img  src={currentImage} style={{width: 200, marginBottom: "0%",marginLeft: "0%"}}/>
          
           
          );
        })} */}
      <button onClick={() => cvToPDF(numOfPages)}>PDF</button>
    </React.Fragment>
  );
}
export default Page;
