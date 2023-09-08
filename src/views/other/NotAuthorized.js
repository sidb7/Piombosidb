// ** React Imports
import { Link } from "react-router-dom";

// ** Reactstrap Imports
import { Button } from "reactstrap";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

import themeConfig from "../configs/themeConfig";

// ** Utils
import {} from "@utils";

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/not-authorized.svg";
import illustrationsDark from "@src/assets/images/pages/not-authorized-dark.svg";

// ** Styles
import "@styles/base/pages/page-misc.scss";

const NotAuthorized = () => {
  // ** Hooks
  const { skin } = useSkin();

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  return (
    <div className="misc-wrapper">
      <Link className="brand-logo" to="/">
        <img
          src={themeConfig.app.appLogoImage}
          className="ms-1"
          alt="Logo"
          height="32"
        />
        <text
          style={{
            fontFamily: "Aclonica",
            color: "primary",
            fontSize: "20px",
          }}
          className="ms-1"
        >
          Piombo
        </text>
      </Link>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">You are not authorized! 🔐</h2>
          <p className="mb-2">
            We have recorded your details and have sent it to the admin for
            approval. You will be notified regarding the status of approval
            shortly. Once approved login using the credentials you had entered.
            Thank you for registering with Piombo!!
          </p>
          <Button
            tag={Link}
            color="primary"
            className="btn-sm-block mb-1"
            to={"/workman/dashboard"}
          >
            Dashboard
          </Button>
          <img className="img-fluid" src={source} alt="Not authorized page" />
        </div>
      </div>
    </div>
  );
};
export default NotAuthorized;
