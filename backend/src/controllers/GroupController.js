import Group from "../models/Group.js";
import User from "../models/User.js";

export async function GroupStore(req, res){
    const {friends, name} = req.body;
    const {user_id} = req.headers;
    
    const user = await User.findById(user_id);

    if(!user){
        return res.status(400).json({error: "Ususario não existe"})
    }
    
    const group = await Group.create({
        user: user_id,
        friends,
        name
    })

    return res.json(group)
}

export async function GroupIndex(req, res){
    const {group_id} = req.headers;
    const group = await Group.findById({_id: group_id});
    return res.json(group); 
  }
  