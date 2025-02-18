import style from "./cards.module.css"

const Cards = ({nom, fini}) => {
        return <>
            <h1 className={style.titre}>{nom}</h1>
            <p className={style.paragraphe}>Statut : {fini}</p>
            <p>-------------</p>
        </>
    };

const PostCards = ({index, name}) => {
    return <>
        <h3>{index}</h3>
    </>
};
export {Cards, PostCards};