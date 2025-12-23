import type {DropDownOptionsType, DropDownProps} from "@/types/ui";
import DropDownAccountOptions from "./DropDownOptionsMenu";
import useLogoutAction from "@/hooks/useLogoutAction";
import AccountInfo from "./AccountInfo"
import {cn} from "@/lib/ui-utils/ui-utils";
import {Activity} from "react";

export default function DropDownAccountMenu(
    {
        open,
        setOpen,
        className,
    }: DropDownProps
) {
    const {LogoutComponent, openLogoutModal} = useLogoutAction();

    // drop down options
    const dropDownAccountOptionsData: DropDownOptionsType[] = [
        {
            icon: "user",
            url: "/account",
            name: "account"
        },
        {
            icon: "logout",
            name: "logout",
            callback: openLogoutModal,
            ulClassName: "hover:bg-rose-600 active:bg-rose-600",
        },
    ];

    return (
        <Activity
            mode={open ? "visible" : "hidden"}
        >
            <div
                className={
                    cn("w-58 mt-2 absolute top-full right-0 z-20 bg-main-bg py-2 rounded-md shadow-2xl",
                        className
                    )
                }
            >
                <AccountInfo
                    className={"pb-4 border-b border-disable-txt/50"}
                />

                <ul
                    className={cn(
                        "divide-y divide-disable-txt/30 pt-2"
                    )}
                >
                    {dropDownAccountOptionsData.length > 0 &&
                        dropDownAccountOptionsData.map(
                            (data) => (
                                <DropDownAccountOptions
                                    key={data.name}
                                    dataLink={data}
                                    className={"pt-2"}
                                    setOpenMenu={setOpen}
                                    ulClassName={data.ulClassName}
                                />
                            )
                        )
                    }
                </ul>
                <LogoutComponent/>
            </div>
        </Activity>
    );
};