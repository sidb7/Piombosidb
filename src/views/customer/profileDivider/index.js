// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Demo Components
import ProfileHorizontal from "./profileHorizontal";

// ** Custom Components
import BreadCrumbs from "@components/breadcrumbs";

const Wizard = (props) => {
  return (
    <Fragment>
      {/* <BreadCrumbs
        title="Form Wizard"
        data={[{ title: "Form" }, { title: "Form Wizard" }]}
      /> */}
      <Row>
        <Col sm="12">
          <ProfileHorizontal site={props.site}/>
        </Col>
      </Row>
    </Fragment>
  );
};
export default Wizard;
