import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

function Education(props) {
  const { addEducation } = props;
  const formik = useFormik({
    initialValues: {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      city: "",
      //   description:""
    },
  });

  console.table(formik.values);
  return (
    <Card
      style={{
        width: "45rem",
        height: "47rem",
        marginLeft: "30%",
        backgroundColor: "gray",
        marginTop: "5%",
      }}
      border="dark"
    >
      <Card.Header className="bg-dark text-light" style={{ height: "5rem" }}>
        <Card.Title style={{ marginTop: 20 }}> Education</Card.Title>
      </Card.Header>
      <div>
        <form style={{ marginLeft: "5%", marginTop: "10%", fontSize: 20 }}>
          <label className="form-label">School:</label>
          <input
            type="text"
            name="school"
            id=""
            className="mb-3"
            style={{ width: "30%" }}
            value={formik.values.school}
            onChange={formik.handleChange}
          />
          <label className="form-label" style={{ marginLeft: "15%" }}>
            Degree:
          </label>
          <input
            type="text"
            name="degree"
            id=""
            className="mb-3"
            style={{ width: "30%" }}
            value={formik.values.degree}
            onChange={formik.handleChange}
          />
          <br />
          <br />
          <br />
          <br />
          <label className="form-label" style={{ marginLeft: "-4%" }}>
            Start Date:
          </label>
          <input
            type="date"
            name="startDate"
            id=""
            className="mb-3"
            style={{ width: "30%" }}
            value={formik.values.startDate}
            onChange={formik.handleChange}
          />
          <label className="form-label" style={{ marginLeft: "15%" }}>
            End Date:
          </label>
          <input
            type="date"
            name="endDate"
            id=""
            className="mb-3"
            style={{ width: "30%" }}
            value={formik.values.endDate}
            onChange={formik.handleChange}
          />
          <br />
          <br />
          <br />
          <br />
          <label className="form-label" style={{ marginLeft: "15%" }}>
            City:
          </label>
          <input
            type="text"
            name="city"
            id=""
            className="mb-3"
            style={{ width: "60%" }}
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          <br />
          <br />
          {/* <label className="form-label" style={{marginLeft:100}}>description:</label><br />
          <textarea name="description" id="" cols="30" rows="10" value={formik.values.description} onChange={formik.handleChange}></textarea> */}
          <br /> <br />
          <Link to="../lastName/occupation/address/phone/email/date/employment">
            <Button className="btn btn-danger">Back</Button>
          </Link>
          <button
            className="btn btn-success"
            onClick={(event) => {
              event.preventDefault();
              addEducation(event, formik.values);
              formik.resetForm()
            }}
            style={{ marginLeft: "32%" }}
          >
            Submit
          </button>
          <Link to="profile">
            <Button className="primary" style={{ marginLeft: "30%" }}>
              Next
            </Button>
          </Link>
          <br />
          <br />
          <p style={{ fontSize: 15, marginLeft: "12%", color: "white" }}>
            <b>*TO ADD ANOTHER EDUCATION CLICK SUBMIT AND TYPE THE NEW ONE*</b>
          </p>
          <p style={{ fontSize: 15, marginLeft: "27%", color: "white" }}>
            <b> *TO CONTINUE CLICK THE NEXT BUTTON*</b>
          </p>
        </form>
      </div>
    </Card>
  );
}

export default Education;
