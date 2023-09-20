// ** React Imports
import { useRef, useState } from "react";

// ** Custom Components
import Wizard from "@components/wizard";

// ** Steps
// import Address from "./steps/Address";
// import SocialLinks from "./steps/SocialLinks";
// import PersonalInfo from "./steps/PersonalInfo";
// import AccountDetails from "./steps/AccountDetails";
import IndividualDetails from "./steps/IndividualDetails";
import AdditionalDetails from "./steps/AdditionalDetails";
import Affiliation from "./steps/Affiliation";

// ** Icons Imports
import { FileText, User, MapPin, Link } from "react-feather";

const ProfileHorizontal = () => {
  // ** Ref
  const ref = useRef(null);

  // ** State
  const [stepper, setStepper] = useState(null);

  const steps = [
    {
      id: "individual-details",
      title: "Individual Details",
      subtitle: "Enter the Details.",
      icon: <User size={18} />,
      content: <IndividualDetails stepper={stepper} type="wizard-modern" />,
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
      subtitle: "Enter the details",
      icon: <FileText size={18} />,
      content: <Affiliation stepper={stepper} type="wizard-modern" />,
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
