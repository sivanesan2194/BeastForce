import React from 'react'
import style from "./Messagebox.module.css"

export const Messagebox = ({onText,onConfirm,onCancel}) => {
  return (
    <>
        <div className={style.dashboard}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.textcontent}>
                        <p className={style.texts}>{onText}</p>
                    </div>
                    <div className={style.buttonbox}>
                        <button onClick={onConfirm}>Sure</button>
                        <button onClick={onCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
