// ** React Imports
import { Link } from "react-router-dom";

// ** Reactstrap Imports
import { Button } from "reactstrap";

// ** Configs
import themeConfig from "@configs/themeConfig";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/error.svg";
import illustrationsDark from "@src/assets/images/pages/error-dark.svg";

// ** Styles
import "@styles/base/pages/page-misc.scss";

const Error = () => {
  // ** Hooks
  const { skin } = useSkin();

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  return (
    <div className="misc-wrapper">
      <a className="brand-logo" href="/">
        <img
          src={themeConfig.app.appLogoImage}
          className="ms-1"
          alt="Logo"
          height="32"
        />
        <img
          src={themeConfig.app.appNameImage}
          className="ms-1"
          alt="Piombo"
          height="28"
        />
      </a>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">Page Not Found 🕵🏻‍♀️</h2>
          <p className="mb-2">
            Oops! 😖 The requested URL was not found on this server.
          </p>
          <Button
            tag={Link}
            to="/workman/dashboard"
            color="primary"
            className="btn-sm-block mb-2"
          >
            Back to Dashboard
          </Button>
          <img className="img-fluid" src={source} alt="Not authorized page" />
        </div>
      </div>
    </div>
  );
};
export default Error;
