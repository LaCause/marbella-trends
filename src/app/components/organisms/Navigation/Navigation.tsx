import Link from "next/link";
import { NavBar } from "../../ui/NavBar/NavBar";

export default function Navigation() {
  const navigation = [
    { name: "Home", link: "#nightclubs" },
    { name: "About us", link: "#holy-beach" },
    { name: "Où sortir ?", link: "/blog" },
    { name: "Contact", link: "#yacht-club" },
  ];
  return (
    <>
      <NavBar navItems={navigation} />
      <nav
        id="navigation"
        className="absolute top-0 left-0 z-10 border-b-[1px] border-blue-400   w-full"
      >
        <ul className="flex py-3 px">
          {navigation.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
