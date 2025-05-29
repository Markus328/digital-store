import { useEffect, useState, useMemo } from "react";
import imageLoader from "../assets/imageLoader.js";

const DynamicImage = ({ asset, name, width = "100%", height = "100%" }) => {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (!asset) return null;

    const path = `./${asset}`;
    const importer = imageLoader[path];

    if (importer) {
      importer().then((mod) => {
        setImgUrl(mod.default);
      });
    } else {
      setImgUrl(null);
    }
  }, [asset]);

  const style = { width, height };
  return (
    <div className="flex items-center justify-center p-2">
      <img src={imgUrl} alt={name} style={style} />
    </div>
  );
};

export default DynamicImage;
