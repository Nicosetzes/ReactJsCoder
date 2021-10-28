export const Item = ({id, title, description, price, pictureUrl}) => {
    return (
        <div className="itemBody">
            <h3>Item - {title}</h3>
            <div>IMG {pictureUrl}</div>
            <span>Price: {price}</span>
            <p>Description: {description}</p>
        </div>
    )
}