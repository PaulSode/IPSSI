import mongoose from 'mongoose';
import joi from 'joi';

const filmSchema = new mongoose.Schema({
        titre: {
            type: String,
            required:true,
            lowercase:true
        },
    annee:{
            type:Number
    }
})

const Film = mongoose.model('films', filmSchema);

const filmValidation = joi.object({
    titre: joi.string().required()
        .messages({'string.empty': 'Le titre est obligatoire'}),
    annee: joi.number().min(1921).required()
        .messages({'number.base': 'L\'année doit être un nombre', 'number.min': 'L\'année doit être supérieure à 1921'})
})
export {Film, filmValidation}