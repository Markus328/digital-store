import { useEffect, useState, useRef } from "react";
import imageLoader from "../assets/imageLoader.js";

const DynamicImage = ({
  asset,
  name,
  width = "100%",
  height = "100%",
  rotation,
}) => {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (!asset) return;

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

  const [combinedStyle, setCombinedStyle] = useState({});
  const [containerStyle, setContainerStyle] = useState({});
  const imgRef = useRef(null);

  // Essa função calcula a escala da imagem para que ela caiba no container sem ser cortada
  const calculateImageNewScale = (width, height, rotation) => {
    const angle = parseFloat(rotation);
    const radians = (angle * Math.PI) / 180;
    const absCos = Math.abs(Math.cos(radians));
    const absSin = Math.abs(Math.sin(radians));
    const fullWidth = width * absCos + height * absSin;
    const fullHeight = width * absSin + height * absCos;

    console.log(
      `width: ${width}, height: ${height}, rotation: ${rotation}, fullWidth: ${fullWidth}, fullHeight: ${fullHeight}`,
    );

    // Retorna a menor escala possível para que a imagem
    return Math.min(width / fullWidth, height / fullHeight);
  };

  useEffect(() => {
    setCombinedStyle({
      width: width,
      height: height,
    });

    if (rotation) {
      // valores de width e height antes de redimensionamentos, porém úteis para o cálculo.
      const { width: width_ratio, height: height_ratio } =
        imgRef.current.getBoundingClientRect();
      const imageScale = calculateImageNewScale(
        width_ratio,
        height_ratio,
        rotation,
      );
      setCombinedStyle({
        width: width,
        height: height,
        transform: `rotate(${rotation}) scale(${imageScale})`,
      });
    }
  }, [imgUrl, rotation, width, height]);

  return (
    <div
      className="flex items-center justify-center p-0"
      style={containerStyle}
    >
      <img src={imgUrl} alt={name} style={combinedStyle} ref={imgRef} />
    </div>
  );
};

export default DynamicImage;
