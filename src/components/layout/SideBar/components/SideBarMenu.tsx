import type {SideBarDataTypes} from "@/types/ui";
import SideBarLinks from "./SideBarLinks";

export default function SideBarMenu() {
    const dataMenu: SideBarDataTypes[] = [
        {
            title: "dashboard",
            dataLinks: [
                {text: "dashboard", url: "/", icon: "dashboard"},
                {text: "properties", url: "/properties", icon: "house"},
            ]
        },
        {
            title: "pages",
            dataLinks: [
                {text: "users", url: "/user", icon: "user"},
                {text: "rules", url: "/rules", icon: "lock"},
            ]
        }
    ];

    return (
        <div
            className={"space-y-5 pb-2"}
        >
            {dataMenu.length > 0
                && dataMenu.map(d => (
                    <SideBarLinks key={d.title} data={d}/>
                ))
            }
        </div>
    );
};