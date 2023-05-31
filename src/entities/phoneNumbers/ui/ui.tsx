import "./styles.scss";
 ;
import { PhoneNumber } from "../../phoneNumber/";
import { Sprite } from "../../sprite";

export function PhoneNumbers() {
    return <div className="phone-numbers-wrapper">
        <PhoneNumber number="375447300500" icon={<Sprite yOffset={-721} />} />
        <PhoneNumber number="375255300500" icon={<Sprite yOffset={-354} />} />
        <PhoneNumber number="375257300500" icon={<Sprite yOffset={-771} />} />
        <PhoneNumber number="375232300500" icon={<Sprite yOffset={-423} />} />
    </div>
}