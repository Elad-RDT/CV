import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "../page.css";

function PageContent(props) {
  const {
    id,
    arr,
    TotalArr,
    arrLinks,
    arrSkills,
    startEmployment,
    numOfPages,
  } = props;
  let toRender = true;
  console.log("key", id);
  return (
    
    <React.Fragment>
      <div className="container text-left">
        <div
          className="row"
          id={"page" + id} //"father"
          style={{ height: "29.7cm", width: "21cm" }}
        >
          <div
            className="col-8"
            style={{ border: "2px double black", height: "29.7cm" }}
          >
            {id == 1 ? (
              <React.Fragment>
                <header>
                  <div>
                    <h1>{arr[0] + " " + arr[1]}</h1>
                    <h2>{arr[2]}</h2>
                  </div>
                </header>
                <br />
                <br />
                <div
                  style={{
                    width: "100%",
                    border: "6px solid gray",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                  }}
                >
                  <h3>Profile</h3>
                  <p>{arr[7]}</p>
                </div>
                <br />
                <h3>Education</h3>
              </React.Fragment>
            ) : (
              ""
            )}
            <div>
              {/* {S S S J J
                  id = 1
                  startEmployment = 1 
              
              } */}
              {TotalArr.map((val, i) => {
                if (val.school != null) {
                  return (
                    <React.Fragment>
                      <p key={i}>
                      <span style={{ color: "gray" }}>
                          <b>{val.startDate + " | " + val.endDate}</b>
                        </span>
                        <ul>
                          <li>School/Academy: {val.school}</li>
                          <li>Degree:{val.degree}</li>
                          <li>City:{val.city}</li>
                        </ul>
                      </p>
                    </React.Fragment>
                  );
                } else {
                  return (
                    <React.Fragment>
                      <div>
                        {id == startEmployment && toRender ? (
                          <React.Fragment>
                            <div
                              style={{
                                border: "6px solid gray",
                                borderTop: "none",
                                borderRight: "none",
                                borderLeft: "none",
                                width: "100%",
                              }}
                            ></div>
                            <br />
                            <h3>Employment</h3>
                            {(toRender = false)}
                          </React.Fragment>
                        ) : (
                          ""
                        )}
                      </div>
                      <p key={i}>
                        <span style={{ color: "gray" }}>
                          <b>{val.startDate + " | " + val.endDate}</b>
                        </span>
                        <ul>
                          <li>Job Title: {val.jobTitle}</li>
                          <li>Employer:{val.employer}</li>
                          <li>City:{val.city}</li>
                        </ul>
                      </p>
                    </React.Fragment>
                  );
                }
              })}
               
            </div>
            <br />
          </div>

          <div
            className="col-4"
            style={{
              backgroundColor: "#154c79",
              color: "white",
            }}
            id="d1"
          >
            {id == 1 ? (
              <React.Fragment>
                <div>
                  <p>
                    <h3>Data</h3>
                    <ul
                      style={{
                        border: "4px solid white",
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        width: "80%",
                      }}
                    >
                      <li>{arr[3]}</li>
                      <li>{arr[4]}</li>
                      <li>{arr[5]}</li>
                      <li>{arr[6]}</li>
                    </ul>
                  </p>
                </div>
                <br />
                <div
                  style={{
                    border: "4px solid white",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    width: "80%",
                  }}
                >
                  <h3>Links</h3>
                  {arrLinks.map((val, i) => {
                    return (
                      <p key={i}>
                        <ul>
                          <li>{val}</li>
                        </ul>
                      </p>
                    );
                  })}
                </div>
                <br />
                <div
                  style={{
                    border: "4px solid white",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    width: "80%",
                  }}
                >
                  <h3>Skills</h3>
                  {arrSkills.map((val, i) => {
                    return (
                      <p key={i}>
                        <ul>
                          <li>{val}</li>
                        </ul>
                      </p>
                    );
                  })}
                </div>{" "}
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
        </div>
        <br />
      </div>
    </React.Fragment>
  );
}
export default PageContent;
