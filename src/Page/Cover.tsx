import { useRef, ChangeEventHandler } from "react";
import styles from "./Cover.module.css"
import coverImage from "./ztm-notes.png"

export const Cover = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    // By setting the initial value of the ref to null we make it an immutable object.
    // The abject is nullable, se we have to use optionals to access them.

    const onChangeCoverImage = () => {
        fileInputRef.current?.click();
    }

    const onCoverImageUpload:ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target;
        console.log(target?.files?.[0])
    }

    return (
        <div className={styles.cover}>
            <img src={coverImage} alt="Cover" className={styles.image}   />
            <button className={styles.button} onClick={onChangeCoverImage}>Change cover</button>
            <input onChange={onCoverImageUpload} style={{display: "none"}} ref={fileInputRef} type="file" />
        </div>
    )
}