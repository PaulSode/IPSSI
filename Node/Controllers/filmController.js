import {Film, filmValidation} from "../Modeles/film.js";

export const getFilms = async (req, res) => {
    const films = await Film.find()
    res.send(films)
}

export const getFilmById = async (req, res) => {
    try {
        const film = await Film.findById(req.param.id)
        if (!film) {
            return res.status(404).json({message: 'Film not found'})
        } else {
            res.status(200).json(film)
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: 'Internal server error'})

    }
}
    export const newFilm = async (req, res) => {
        try {
            const {error, value} = filmValidation.validate(req.body)
            if (error) {
                return res.status(400).json({message: error.details[0].message});
            } else {
            const nouveauFilm = newFilm(req.body)
            const savedFilm = await nouveauFilm.save()
            res.status(201).json(savedFilm)
            }
        } catch (err){
            console.log(err)
             return res.status(500).json({message: 'Internal server error'})
        }
}

export const deleteFilm = async (req, res) => {
    try {
        const film = await Film.findByIdAndDelete(req.param.id)
        if (!film) {
            return res.status(404).json({message: 'Film not found'})
        } else {
            res.status(204).json({message: 'Film deleted'})
        }
    }catch (err){
        console.log(err)
        return res.status(500).json({message: 'Internal server error'})
    }
}

export const updateFilm = async (req, res) => {
    try {
        const { error, value } = filmValidation.validate(req.body)
        if (error){
            return res.status(400).json({message: error.details[0].message})
        } else {
            const film = await Film.findByIdAndUpdate(req.param.id, {
                titre: req.body.titre,
                annee: req.body.annee,
            }, {new: true})

            if (!film) {
                return res.status(404).json({message: 'Film not found'})
            } else {
                res.status(200).json(film)
            }
        }
    } catch (err){
        return res.status(500).json({message: 'Internal server error'})
    }
}