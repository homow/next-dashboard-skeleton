import type {Metadata} from 'next';
import Tab1 from "./components/Tab-1";

export default function Home() {
    return (
        <section>
            <Tab1/>
        </section>
    );
};

export const metadata:Metadata = {
    title: `داشبورد ${process.env.NEXT_PUBLIC_BASE_TITLE}`,
}