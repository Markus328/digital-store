import { Link } from "react-router-dom";
import IconLoader from "./IconLoader.jsx";

const Logo = ({ color }) => {
  return (
    <IconLoader
      name="logo"
      style={{
        color: `var(--${color})`,
      }}
    />
  );
};

export default Logo;
