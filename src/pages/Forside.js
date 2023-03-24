import { useState, useEffect } from "react";
import Produktkort from "../components/Produktkort";
import hundmedsne from "../images/snowman-4688913_1280.jpg";

export default function Forside() {
    // "posts" kommer til at indeholder listen af hundeplejeprodukter
    const [posts, setPosts] = useState([]);
    // "isPosts" kan være enten "true" (hvis der er produkter) eller
    // "false" hvis ingen produkter der er.
    const [isPosts, setIsPosts] = useState(true);

    // Data hentes fra firebase og gemmes i "post" variabel
    useEffect(() => {
        async function getPosts() {
            const url = "https://fidofidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
            
            // Vent indtil response modtager positivt svar fra firebase
            const response = await fetch(url);
            // Læg json data (listen af produkter) over i variablen "data"
            const data = await response.json();

            // Tjek om der faktisk er produkter på listen (positiv hvis 
            // forskellig fra null)
            if (data !== null) {
                const postsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setPosts(postsArray)
            } else {
                setIsPosts(false);
            }
        }
        getPosts();
        
    }, []);

    return (
        <main>
            <div className="forsidebillede">
                <img src={hundmedsne} alt="Billede med hund og sne" className="herobillede" />
            </div>

            
            {isPosts ? (
                <div className="kortraekke">
                    {posts.map((post) => (
                        <Produktkort key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <p>Ingen produkter at vise</p>
            )}
        </main>
    )
}

// Kommentar til linje 45 til 53
// Hvis der er produkter at vise (isPosts = true), så går programmet i løkke
// (posts.map) - hvor hvert element (post) på listen (posts), vis produktkort
// for produktet.