import User from "../models/User.js"


export async function userStore(req, res) {
    const {name, email} = req.body;

    let user = await User.findOne({email});

    if(!user){
        user = await User.create({
           email, name
       })
    }
    return res.json(user);
}