// ** React Imports
import { useRef, useState } from "react";
import { Fragment } from "react";
import { Row, Col } from "reactstrap";

// ** Custom Components
import Wizard from "@components/wizard";

import CaseDetails from "./steps/CaseDetails";
import ProductDetails from "./steps/ProductDetails";
import Confirmation from "./steps/Confirmation";

// ** Icons Imports
import { FileText, User, MapPin, Link } from "react-feather";

const CreateCase = () => {
  // ** Ref
  const ref = useRef(null);

  // ** State
  const [stepper, setStepper] = useState(null);

  const steps = [
    {
      id: "case-details",
      title: "Case Details",
      subtitle: "Enter the Details.",
      icon: <User size={18} />,
      content: <CaseDetails stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "product-details",
      title: "Product Details",
      subtitle: "Enter the Details.",
      icon: <FileText size={18} />,
      content: <ProductDetails stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "confirmation",
      title: "Confirmation",
      subtitle: "Case confirmation",
      icon: <FileText size={18} />,
      content: <Confirmation stepper={stepper} type="wizard-modern" />,
    },
  ];

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <div className="modern-horizontal-wizard">
            <Wizard
              type="modern-horizontal"
              ref={ref}
              steps={steps}
              options={{
                linear: false,
              }}
              instance={(el) => setStepper(el)}
            />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CreateCase;
