import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsAPI from "../../services/postsAPI";

const RouteDynamic = () => {

    const { id } = useParams();
    const [monster, setMonster] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        PostsAPI.getPostById(id).then((response) => {
                console.log("Détails du monstre :", response);
                setMonster(response);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération du monstre :", error);
                setMonster(null);
                setIsLoading(false);
            });
    }, [id]);


    if (isLoading) {
        return <p>Chargement...</p>;
    }

    if (!monster) {
        return <p>Monstre non trouvé.</p>;
    }

    return (
        <>
            <h2>Monstre : {monster.name}</h2>
            <p>Index : {monster.index}</p>
            <p>Taille : {monster.size}</p>
            <p>Type : {monster.type}</p>
            <p>Alignement : {monster.alignment}</p>
            <p>Classe d'armure : {monster.armor_class[0]?.value} ({monster.armor_class[0]?.type})</p>
            <p>Points de vie : {monster.hit_points} ({monster.hit_dice}, Roll : {monster.hit_points_roll})</p>
            <p>Vitesse : </p>
            <ul>
                <li>Marche : {monster.speed.walk}</li>
                <li>Nage : {monster.speed.swim}</li>
            </ul>
            <p>Forces principales :</p>
            <ul>
                <li>Force : {monster.strength}</li>
                <li>Dextérité : {monster.dexterity}</li>
                <li>Constitution : {monster.constitution}</li>
                <li>Intelligence : {monster.intelligence}</li>
                <li>Sagesse : {monster.wisdom}</li>
                <li>Charisme : {monster.charisma}</li>
            </ul>
        </>
    );
};

export default RouteDynamic;