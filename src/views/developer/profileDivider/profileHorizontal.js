// ** React Imports
import { useRef, useState } from "react";

// ** Custom Components
import Wizard from "@components/wizard";

import CompanyDetails from "./steps/CompanyDetails";
import Affiliation from "./steps/Affiliation";
import AdditionalDetails from "./steps/AdditionalDetails";

// ** Icons Imports
import { FileText, User, MapPin, Link } from "react-feather";

const ProfileHorizontal = (props) => {
  // ** Ref
  const ref = useRef(null);

  // ** State
  const [stepper, setStepper] = useState(null);

  const steps = [
    {
      id: "company-details",
      title: "Company/Firm Details",
      subtitle: "Enter the Details.",
      icon: <User size={18} />,
      content: <CompanyDetails stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "addn-details",
      title: "Additional Details",
      subtitle: "Enter the Details.",
      icon: <FileText size={18} />,
      content: <AdditionalDetails stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "affiliation",
      title: "Affiliation",
      subtitle: "Enter the Details.",
      icon: <FileText size={18} />,
      content: <Affiliation site={props.site} stepper={stepper} type="wizard-modern" />,
    },
  ];

  return (
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
  );
};

export default ProfileHorizontal;
