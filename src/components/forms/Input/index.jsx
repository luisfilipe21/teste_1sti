import { forwardRef } from "react"

export const Input = forwardRef(({ errors, ...rest }, ref) => {

    return (
        <div >
            <input className="" ref={ref} {...rest} />
            {/* {errors ? <p className={styles.error}>{errors.message}</p> : null} */}
        </div>
    )
})