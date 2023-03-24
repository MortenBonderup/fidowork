export default function Produktkort({ post }) {
    // "post" refererer til oplysningerne i Firebase JSON
    // fx. post.pris = pris elementet i json.
    return (
        <div className="kort">
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <p>{post.beskrivelse}</p>
                <hr />
                <p>Varighed: {post.varighed}</p>
                <p>Pris kr. {post.pris}</p>
            </div>
        </div>
    )
}