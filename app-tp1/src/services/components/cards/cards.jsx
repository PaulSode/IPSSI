import style from "./cards.module.css"

const Cards = ({prenom, nom}) => {
        return <>
            <h1 className={style.titre}>Coucou</h1>
            <p className={style.paragraphe}>C'est moi {prenom} {nom}</p>
            <p className={style.paragraphe}>Non en vrai c'est pas moi désolé</p>
        </>
    };
export default Cards;