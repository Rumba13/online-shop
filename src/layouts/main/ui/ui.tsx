import "./styles.scss"
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import { Routing } from "../../../pages/rounting";
import { Aside } from "../../../widgets/aside";

export function Main() { //widget/layout
    return <main className="main">
        <BreadCrumbs />
        <Aside />
        <Routing />
    </main>
}   