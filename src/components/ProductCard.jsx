import DynamicImage from "./DynamicImage.jsx";
import { Link } from "react-router-dom";

const ProductImage = ({ image, itemType, rotation, scale }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full h-full bg-(--white) rounded-sm">
        <DynamicImage
          asset={image}
          name={itemType}
          rotation={rotation}
          scale={scale}
        />
      </div>
      <p className="text-(--light-gray) text-xs font-bold">{itemType}</p>
    </div>
  );
};

const ProductCard = ({
  image,
  name,
  itemType,
  price = 0.0,
  priceDiscount = price,
  rotation,
  scale,
  link,
}) => {
  if (!image) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {/* para fins semanticos, usa-se figure */}
      <figure className="flex flex-col gap-1 w-full">
        <ProductImage
          image={image}
          itemType={itemType}
          rotation={rotation}
          scale={scale}
        />
        <figcaption className="text-sm md:text-base lg:text-2xl text-ellipsis text-nowrap overflow-hidden">
          <Link to={link}>{name}</Link>
        </figcaption>
      </figure>
      <div className="flex ml-3 justify-start w-full gap-4">
        {priceDiscount != price ? (
          <span className="text-(--light-gray) text-sm md:text-base lg:text-2xl line-through ">{`$${price}`}</span>
        ) : null}
        <span className="font-bold text-(--dark-gray) text-sm md:text-base lg:text-2xl">{`$${priceDiscount}`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
