"use client";

import {cn} from "@/lib/ui-utils/ui-utils";
import SideBarMenu from "./components/SideBarMenu";
import SideBarHeader from "./components/SideBarHeader";
import SidebarEffect from "./components/SidebarEffect";
import useMobileNavStore from "@/store/mobileNavStore";

export default function SideBar() {
    const {isOpenNav} = useMobileNavStore();

    return (
        <aside
            id="side-bar"
            className={
                cn(
                    "fixed overflow-hidden top-0 pr-4.5 transition-all text-sm max-md:mobile-nav md:w-custom md:text-base",
                    isOpenNav ? "max-md:left-0" : "max-md:-left-58"
                )
            }
        >
            <SidebarEffect/>
            <SideBarHeader/>
            <SideBarMenu/>
        </aside>
    );
};