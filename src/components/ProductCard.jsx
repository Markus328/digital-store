import { useEffect, useState } from "react";
import DynamicImage from "./DynamicImage.jsx";

const ProductImage = ({ image, itemType }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full h-full bg-(--white)">
        <DynamicImage asset={image} name={itemType} />
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
}) => {
  if (!image) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {/* para fins semanticos, usa-se figure */}
      <figure className="flex flex-col gap-1 w-full">
        <ProductImage image={image} itemType={itemType} />
        <figcaption className="text-sm md:text-base lg:text-2xl text-ellipsis text-nowrap overflow-hidden">
          {name}
        </figcaption>
      </figure>
      <div className="flex ml-3 justify-start w-full gap-4">
        {priceDiscount != price ? (
          <span className="text-(--light-gray) text-sm md:text-base lg:text-2xl line-through ">{`\$${price}`}</span>
        ) : null}
        <span className="font-bold text-(--dark-gray) text-sm md:text-base lg:text-2xl">{`\$${priceDiscount}`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
