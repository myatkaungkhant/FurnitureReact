import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { Product } from "@/types";
import { Link } from "react-router";
interface ProductPros {
  products: Product[];
}

const CarouselCard = ({ products }: ProductPros) => {
  return (
    <>
      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full">
        <CarouselContent className="-ml-1">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-1 lg:basis-1/3">
              <div className="flex gap-4 p-4 lg:px-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="size-28 rounded-md"
                />
                <div>
                  <h3 className="text-sm font-bold line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="my-2 text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-sm font-semibold hover:underline text-own"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default CarouselCard;
