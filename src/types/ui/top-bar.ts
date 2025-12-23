import type {NoLimitArgsFn, UseToggleFn} from "./";

interface BaseDropDownOptionsType {
    icon: string;
    name: string;
    ulClassName?: string;
}

interface LinkDropDownOptionsType extends BaseDropDownOptionsType {
    url: string;
    callback?: never;
}

interface ActionDropDownOptionsType extends BaseDropDownOptionsType {
    url?: never;
    callback: NoLimitArgsFn;
}

export type DropDownOptionsType = LinkDropDownOptionsType | ActionDropDownOptionsType;

export interface DropDownProps {
    className?: string;
    open: boolean;
    setOpen: UseToggleFn;
    ulClassName?: string;
}

export interface DropDownAccountOptionsProps {
    className?: string;
    setOpenMenu?: UseToggleFn;
    dataLink: DropDownOptionsType;
    ulClassName?: string;
}