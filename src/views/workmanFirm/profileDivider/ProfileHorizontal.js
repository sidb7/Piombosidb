// ** React Imports
import { useRef, useState } from "react";

// ** Custom Components
import Wizard from "@components/wizard";

// ** Steps
import CompanyDetails from "./steps/CompanyDetails";
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
      id: "Company-details",
      title: "Company/Firm Details",
      subtitle: "Enter the Details.",
      icon: <User size={18} />,
      content: (
        <CompanyDetails
          stepper={stepper}
          type="wizard-modern"
          contactDetails={{
            mobile: props.mobile,
            email: props.email,
          }}
        />
      ),
    },
    {
      id: "addn-details",
      title: "Additional Information",
      subtitle: "Enter the Details.",
      icon: <FileText size={18} />,
      content: (
        <AdditionalDetails
          stepper={stepper}
          type="wizard-modern"
          userid={props.userid}
        />
      ),
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
