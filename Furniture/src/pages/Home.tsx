import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Couch from "@/data/images/couch.png";

function Home() {
  return (
    <>
      <div className="contianer mx-auto mt-16">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Text Section */}
          <div className="my-8 text-center lg:text-left lg:mb-0 lg:mt-16 lg:w-2/5">
            <h1 className="mb-4 text-4xl font-extrabold lg:text-6xl lg:mb-8 text-own">
              Modern Interior Design Studio
            </h1>
            <p className="mb-6  lg:mb-8">
              Furniture is an essential component of any living space, providing
              functionality, comfort, and aesthetic appeal.
            </p>
            <div>
              <Button
                asChild
                className="mr-2 rounded-full bg-orange-300 text-base font-bold px-8 py-6"
              >
                <Link to="#">Shop Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full text-base text-own font-bold px-8 py-6"
              >
                <Link to="#">Explore</Link>
              </Button>
            </div>
          </div>
          {/* Image Section */}
          <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
        </div>
      </div>
    </>
  );
}

export default Home;
