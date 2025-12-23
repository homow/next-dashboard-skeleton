"use client";

import {cn} from "@/lib/ui-utils/ui-utils";
import Icon from "@/components/icon/Icon";
import useSidebarStore from "@/store/sidebarStore";

export default function SideBarHeader() {
    const {currentCollapsed, setCollapsed} = useSidebarStore();

    function toggleCollapse() {
        setCollapsed();
    }

    return (
        <div
            className={
                "relative flex items-center justify-between h-16"
            }
        >
            <div
                className={"flex flex-row items-center gap-4 pr-6"}
            >
                <Icon
                    icon={"logo"}
                />
                <span
                    className={cn(
                        "font-medium",
                        currentCollapsed ? "hidden-effect" : "show-effect"
                    )}
                >
                    پنل مدیریت
                </span>
            </div>

            <div
                onClick={toggleCollapse}
                className={
                    cn(
                        "hidden md:flex items-center justify-center absolute -left-5.5 cursor-pointer -rotate-180 transition-all duration-500",
                        currentCollapsed && "rotate-0"
                    )
                }
            >
                <Icon
                    className={"size-5"}
                    icon={"chevronDoubleRight"}
                />
            </div>
        </div>
    );
};