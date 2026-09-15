import { Link } from "react-router";
import { siteConfig } from "@/config/site";
import { icons } from "../icons";

function Footer() {
  return (
    <footer className="w-full border-t ml-4 lg:ml-0">
      <div className="container mx-auto pb-8 pt-6 lg:py-6">
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <section>
            <Link to="/" className="flex items-center space-x-2">
              <icons.logo className="size-6" aria-hidden="true"></icons.logo>
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>

          <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
            {siteConfig.footerNav.map((footerItem) => (
              <div className="" key={footerItem.title}>
                <h4 className="font-semibold">{footerItem.title}</h4>
                <ul className="">
                  {footerItem.items.map((item) => (
                    <li className="" key={item.title}>
                      <Link to={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
