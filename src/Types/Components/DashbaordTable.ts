import { productObjectType } from "./ProductListsType"

export type TableStatus={

    data?: productObjectType[],
    onDeleteSuccess: () => void;
}
