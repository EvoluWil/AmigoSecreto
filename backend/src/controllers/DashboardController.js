import Group from "../models/Group.js";


export async function dashboardShow(req, res){
    const {user_id} = req.headers;
    const group = await Group.find({user: user_id});

    return res.json(group);
}