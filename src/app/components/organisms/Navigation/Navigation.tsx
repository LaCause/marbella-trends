"use client";

import { useTheme } from "@/app/context/themeContext/ThemeContext";
import { useAuth } from "@/app/context/AuthContext/AuthContext";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

const HAS_ADMIN_CONNECTED = true;

const navigation = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "À propos",
    href: "/about",
  },
  {
    title: "Catégories",
    href: "/docs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    requireAccess: true,
  },
];

export const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const { username, login } = useAuth();

  return (
    <NavigationMenu className="mx-auto">
      CKDSN,CLDKS,
      <Button>Login</Button>
      <NavigationMenuList>
        {navigation.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link
              href={item.href}
              legacyBehavior
              passHref
              className="yaniscdslkc,sl"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
