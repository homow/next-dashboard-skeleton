'use client';

import {useEffect} from "react";

const baseTitle: string = process.env.NEXT_PUBLIC_BASE_TITLE || "Next Skeleton";

export default function useSetClientTitle(title: string) {
    useEffect(() => {
        document.title = `${title} | ${baseTitle}`;
    }, [title]);
};