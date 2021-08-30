
export default function Car({item}) {
    return (
        <div>
            Id: {item.id},
            Model: {item.model},
            Price: {item.price} USD,
            Year: {item.year}
        </div>

    )
}