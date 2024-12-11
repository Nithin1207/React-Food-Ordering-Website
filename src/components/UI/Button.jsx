export default function Button({ children, textOnly, className, ...props }) {
    let cssClass = textOnly ? "text-button" : "button"
    cssClass = cssClass + " " + className
    return (
        <>
            <button className={cssClass} {...props}>{children}</button>

        </>
    )
}