export default function Price(props) {
    return (
        <>
            ${(props.finalPrice / 100).toFixed(2)}{" "}
            {props.finalPrice !== props.originalPrice ? (
                <span className="price-old">
                    ${(props.originalPrice / 100).toFixed(2)}
                </span>
            ) : null}
        </>
    );
}
