import { useEffect, useState, useRef, useCallback } from "react";
import imageLoader from "../assets/imageLoader.js";

const DynamicImage = ({
  asset,
  name,
  width = "100%",
  height = "100%",
  rotation = "0deg",
  scale = "0",
  className = "",
}) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [imgRatio, setImgRatio] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!asset) {
      setImgUrl(null);
      setIsImageLoaded(false);
      return;
    }

    const path = `./${asset}`;
    const importer = imageLoader[path];

    if (importer) {
      importer().then((mod) => {
        setImgUrl(mod.default);
      });
    } else {
      setImgUrl(null);
      setIsImageLoaded(false);
    }
  }, [asset]);

  const calculateImageNewScale = useCallback((ratio, rotation) => {
    const angle = parseFloat(rotation) || 0;
    const width = ratio;
    const height = 1;

    const radians = (angle * Math.PI) / 180;
    const absCos = Math.abs(Math.cos(radians));
    const absSin = Math.abs(Math.sin(radians));
    const fullWidth = width * absCos + height * absSin;
    const fullHeight = width * absSin + height * absCos;

    return Math.min(width / fullWidth, height / fullHeight);
  }, []);

  const handleImageLoad = useCallback(() => {
    if (imgRef.current) {
      const { width: width_ratio, height: height_ratio } =
        imgRef.current.getBoundingClientRect();
      setImgRatio(width_ratio / height_ratio);
      setIsImageLoaded(true);
    }
  }, []);

  const [combinedStyle, setCombinedStyle] = useState({});
  useEffect(() => {
    const baseStyle = {
      width: width,
      height: height,
    };
    if (rotation && isImageLoaded) {
      const imageScale =
        calculateImageNewScale(imgRatio, rotation) * (parseFloat(scale) || 1);
      setCombinedStyle({
        ...baseStyle,
        transform: `rotate(${rotation}) scale(${imageScale})`,
      });
    } else setCombinedStyle(baseStyle);
  }, [
    calculateImageNewScale,
    height,
    imgRatio,
    isImageLoaded,
    rotation,
    scale,
    width,
  ]);
  return (
    <div className="flex items-center justify-center p-2">
      <img
        src={imgUrl}
        alt={name}
        style={combinedStyle}
        ref={imgRef}
        className={className}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default DynamicImage;
