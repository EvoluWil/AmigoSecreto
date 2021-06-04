import Group from "../models/Group.js";
import User from "../models/User.js";
import Draw from "../models/Draw.js";
import SendMail from "../Services/MailService.js";


export async function DrawStore(req, res){
    const {user_id, group_id} = req.headers;

    const user = await User.findById(user_id);
    const group = await Group.findById({_id: group_id});

    const friends = group.friends
    
    const names = [user, ...friends] 

    const pairs = [];

    names.sort(() => Math.random() - 0.5);
  
    for (let i = 0; i < names.length; i++) {
      pairs.push([names[i], names[(i != names.length - 1) ? i+1 : 0]]);
    }
    pairs.forEach(element => SendMail(element[0].email, element[0].name, element[1].name))

    const draw = await Draw.create({
      pairs
    })
    return res.json(draw)
}
