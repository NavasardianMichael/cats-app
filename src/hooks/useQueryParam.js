import { useRouteMatch } from "react-router-dom"

export function useQueryParam(name) {
    let match = useRouteMatch()
    return match?.params?.[name]
}