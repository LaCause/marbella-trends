"use client";
import { Home, Inbox, LocateIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useParams, usePathname } from "next/navigation";

const items = [
  {
    title: "Home",
    slug: "dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Categories",
    slug: "categories",
    url: "/dashboard/categories",
    icon: Inbox,
  },
  {
    title: "Locations",
    slug: "locations",
    url: "/dashboard/locations",
    icon: LocateIcon,
  },
];

export function AppSidebar() {
  const router = usePathname();
  const formattedPath = router.split("/").findLast(Boolean);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span
                        className={
                          formattedPath === item.slug ? "font-bold" : ""
                        }
                      >
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
