import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  // CardAction,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import { icons } from "@/components/icons";

function Error() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="mx-auto flex flex-1 items-center my-32">
          <Card className="w-[350px] md:w-[500px] lg:w-[500px]">
            <CardHeader className="place-items-center gap-2">
              <div className="border border-dashed border-muted-foreground/70 rounded-full size-24 grid place-items-center mt-2 mb-4">
                <icons.exclamation
                  className="size-10 text-muted-foreground/70"
                  aria-hidden="true"
                />
              </div>
              <CardTitle className="">Oops !</CardTitle>
              <CardDescription className="">
                An Error is occured accidently.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button variant="outline" asChild>
                <Link to="/">Go to Home Page</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Error;
