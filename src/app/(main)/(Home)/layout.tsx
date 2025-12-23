import type {MainComponentProps} from "@/types/ui";

export default function Layout(
    {
        children,
    }: MainComponentProps
) {
    return (
        <>
            {children}
        </>
    );
};