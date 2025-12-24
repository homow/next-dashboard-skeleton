import {Metadata} from "next";

export default function properties() {
    return (
        <section
            className={"main-components"}
        >
            properties
        </section>
    );
};

export const metadata: Metadata = {
    title: `Properties ${process.env.NEXT_PUBLIC_BASE_TITLE}`,
}