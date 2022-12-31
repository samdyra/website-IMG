import { lazy } from "react";
import { wait } from "./wait";

export function useLazyLoad(path, namedExport) {
    return lazy(() => {
        const promise = import(path)
        if (namedExport == null) {
            return promise
        } else {
            return promise.then(module => ({ default: module[namedExport] }))
        }
    })
}