import { Sprite } from "../../entities/sprite";
import "./scrollUp.scss"
import useScrollUp from "./useScrollUp"

export default function ScrollUp() {
    const {onClick} = useScrollUp();
   
    return <div onClick={onClick} className="scroll-up-wrapper">
        <div className="scroll-up">
            <Sprite yOffset={-377} />
            <span className="scroll-up__text">Подняться на вверх сайта</span>
        </div>
    </div>
}