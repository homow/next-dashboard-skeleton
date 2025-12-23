import {cn} from "@/lib/ui-utils";

export default function loading() {
    return (
        <div
            className={cn(
                "flex-1 flex items-center justify-center min-h-full",
            )}
            role="status"
            aria-live="polite"
        >
            <div
                className="flex flex-col items-center gap-4"
            >
                {/* Spinner */}
                <div
                    className="size-16 border-4 border-t-sky-500 border-gray-300 rounded-full animate-spin xl:size-20 xl:border-8"
                />
                {/* Message */}
                <p
                    className="text-lg font-medium xl:text-2xl"
                >
                    یکم صبر کن...
                </p>
            </div>
        </div>
    );
};