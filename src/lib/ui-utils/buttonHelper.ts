import {cn} from "@/lib/ui-utils";
import type {ButtonPropsStyle} from "@/types/ui";

export default function buttonStyle(
    {
        btnStyle,
        className,
        loading,
        disabled
    }: ButtonPropsStyle
): string {
    const outlineStyle = "border border-sky-600 text-sky-600 focus-visible:border-sky-700 focus-visible:text-sky-900 disabled:text-neutral-400 disabled:border-neutral-200 dark:disabled:border-neutral-600 dark:disabled:text-neutral-500";
    const segmentedStyle = "hover:border-sky-500 active:bg-sky-600 active:border-sky-600 active:text-white disabled:border-neutral-300 disabled:text-neutral-500";

    const buttonStyle: string = {
        fill: "bg-sky-600 text-white rounded-lg hover:bg-sky-700 active:bg-sky-900 focus-visible:bg-sky-700 disabled:bg-neutral-300 disabled:text-neutral-500 dark:disabled:bg-neutral-700 dark:disabled:text-neutral-300",
        outline: `${outlineStyle} rounded-lg hover:border-sky-700 active:text-sky-900 active:border-sky-900`,
        sharpL: `${outlineStyle} ${segmentedStyle} rounded-r-lg`,
        sharpR: `${outlineStyle} ${segmentedStyle} rounded-l-lg`,
        sharpBoth: `${outlineStyle} ${segmentedStyle}`,
        sharpNone: `${outlineStyle} ${segmentedStyle} rounded-lg`,
        primary: "text-sky-600 hover:border-sky-700 active:text-sky-900 focus-visible:text-sky-700 disabled:text-neutral-400 dark:disabled:text-neutral-500"
    }[btnStyle];

    return cn(
        "flex items-center gap-2 h-10 text-center font-medium px-4 py-1.5 cursor-pointer transition-all outline-none md:h-11",
        buttonStyle,
        className,
        (loading || disabled)
        && "pointer-events-none"
    );
};