import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

function Error() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="mx-auto flex flex-1 items-center">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle className="text-center">Oops !</CardTitle>
              <CardDescription className="text-center">
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
      </div>
    </>
  );
}

export default Error;
