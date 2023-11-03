
export const Section = ({ title, children  }) => {
    return (
        <div className="section">
            <h2 className="header">{title}</h2>
            {children}
        </div>
    )
}
