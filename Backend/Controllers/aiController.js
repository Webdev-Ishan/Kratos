import * as ai from '../Service/aiService.js'

export const getResult = async (req, res)=>{


try {

    const {prompt} = req.query;
    const result = await ai.generateoutput(prompt);
    res.send(result);

}
catch (err){

    res.status(500).send({message:err.message});
}

}