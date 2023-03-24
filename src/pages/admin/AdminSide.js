import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Produktkort from "../../components/admin/ProduktAdminkort";

export default function AdminSide() {
    // "posts" kommer til at indeholde alle produkter i en liste (array)
    const [posts, setPosts] = useState([]);
    // isPosts kan være true eller false. Hvis ingen produkter eksisterer, så er isPosts false
    const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
    const navigate = useNavigate();

    // Funktion (hook) som henter produkter fra Firebase database
    useEffect(() => {
        async function getPosts() {
        const url = "https://fidofidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
            const response = await fetch(url);
            // data indholder al indhold fra produkt database
        const data = await response.json();
        
            // Er der produkter ?
            if (data !== null) {
                const postsArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));
                // Variablen "posts" bliver lig med listen af produkter
                setPosts(postsArray);
            } else {
                // Sætte variablen isPosts til false, for der er ingen produkter
                setIsPosts(false);
            }
        }
        getPosts();
    }, []);

    // Event handler for klik på opret knap
    function opretklik() {
        navigate("/create");
    }

    return (
    <main>
    <h1>
    Administration af produkter
    <button type="button" onClick={opretklik}>+ Opret produkt</button>
    </h1>
      
    {isPosts ? (
    <div className="kortraekke">
    {posts.map((post) => (
    <Produktkort key={post.id} post={post} />
    ))}
    </div>
    ) : (
    <p>Ingenting at vise</p>
    )}
    </main>
    );
}