import { loadIcon } from "../assets/imageLoader.js";
import { useEffect, useState } from "react";
const IconLoader = (props) => {
  const [Icon, setIcon] = useState(null);
  const { name, ...svgProps } = props;
  useEffect(() => {
    setIcon(loadIcon(name));
  }, [name]);

  if (Icon) {
    return (
      <div>
        <Icon {...svgProps} />
      </div>
    );
  }
  return null;
};

export default IconLoader;
