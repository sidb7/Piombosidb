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

const ProfileHorizontal = (props) => {
  // ** Ref
  const ref = useRef(null);
  const [individualDetails, setIndividualDetails] = useState({});
  const [additionalDetails, setAdditionalDetails] = useState({});
  const [affiliation, setAffiliation] = useState({});

  // ** State
  const [stepper, setStepper] = useState(null);
  // console.log(individualDetails);

  const steps = [
    {
      id: "individual-details",
      title: "Individual Details",
      subtitle: "Enter the Details.",
      icon: <User size={18} />,
      content: (
        <IndividualDetails
          stepper={stepper}
          type="wizard-modern"
          dataHandler={() => setIndividualDetails}
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
          dataHandler={() => setAdditionalDetails}
        />
      ),
    },
    {
      id: "affiliation",
      title: "Affiliation",
      subtitle: "Enter the details",
      icon: <FileText size={18} />,
      content: (
        <Affiliation
          stepper={stepper}
          type="wizard-modern"
          dataHandler={() => setAffiliation}
          step1data={individualDetails}
          step2data={additionalDetails}
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
        onChange={(e) => setDetails(e)}
      />
    </div>
  );
};

export default ProfileHorizontal;
