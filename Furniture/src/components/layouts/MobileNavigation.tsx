import type { MainNavItem } from "@/types";
import { icons } from "../icons";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MainNavigationProps {
  items?: MainNavItem[];
}

import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNavigation({ items }: MainNavigationProps) {
  return (
    <>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-4 size-5">
              <icons.menu aria-hidden="true" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pt-9">
            <SheetClose asChild>
              <Link to="/" className="flex items-center">
                <icons.logo className="size-4 mr-2" />
                <span className="font-bold">{siteConfig.name}</span>
                <span className="sr-only">Home</span>
              </Link>
            </SheetClose>
            <ScrollArea className="my-4 h[calc(100vh-8rem)]"></ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
