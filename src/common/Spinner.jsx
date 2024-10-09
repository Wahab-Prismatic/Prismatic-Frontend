import { BeatLoader, RingLoader } from "react-spinners";

export default function Spinner({ color, isCentered }) {
    <BeatLoader
        color={color ?? '#007aff'}
        style={
            isCentered && {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }
        }
    />
}