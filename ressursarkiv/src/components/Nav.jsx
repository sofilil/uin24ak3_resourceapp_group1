import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    const [active, setActive] = useState();
    
    const categoryList = [
        { name: "HTML", path: "/html" },
        { name: "CSS", path: "/css" },
        { name: "JavaScript", path: "/javascript" },
        { name: "React", path: "/react" },
        { name: "Sanity", path: "/sanity" }
    ];

    useEffect(() => {
        
    }, [active]);

    return (
        <nav>
            <ul>
                {categoryList.map((item, i) => (
                    <li key={i + "cat"}>
                        <Link to={item.path}
                            onClick={() => setActive(item.name)}
                            className={active === item.name ? "active button" : "button"}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}