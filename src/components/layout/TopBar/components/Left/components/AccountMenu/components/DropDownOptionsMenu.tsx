import type {MouseEvent} from 'react';
import type {
    NoLimitArgsFn,
    DropDownAccountOptionsProps
} from "@/types/ui";

import Link from "next/link";
import Icon from "@/components/icon/Icon";
import {cn} from "@/lib/ui-utils";

export default function DropDownAccountOptions(
    {
        dataLink,
        setOpenMenu,
        ulClassName,
    }: DropDownAccountOptionsProps
) {
    function onClickHandler(
        callback: NoLimitArgsFn | null
        , event: MouseEvent<HTMLElement>
    ) {
        event.stopPropagation();

        if (callback) {
            callback();
            return;
        }

        if (setOpenMenu) setOpenMenu(false);
    }

    return (
        <li
            key={dataLink.name}
            className={
                cn(
                    "w-full py-0.5 *:py-1.5 *:hover:opacity-100 hover:text-white hover:bg-sky-500 active:bg-sky-500 active:text-white *:active:text-white *:hover:text-white *:transition-all *:duration-300 *:rounded-md",
                    ulClassName
                )
            }
        >
            {dataLink.url ? (
                <Link
                    onClick={(event) => {
                        onClickHandler(null, event);
                    }}
                    href={`${dataLink.url}`}
                    className={
                        "w-full flex flex-row items-start gap-2 px-4"
                    }
                >
                    <Icon
                        icon={dataLink.icon}
                        className={"size-5"}
                    />
                    {dataLink.name}
                </Link>
            ) : (
                <p
                    onClick={(event) => {
                        if (dataLink.callback) onClickHandler(dataLink.callback, event);
                    }}
                    className={
                        "flex flex-row items-center gap-2 px-4 cursor-pointer"
                    }
                >
                    <Icon
                        icon={dataLink.icon}
                        className={"size-5"}
                    />
                    {dataLink.name}
                </p>
            )}
        </li>
    );
};