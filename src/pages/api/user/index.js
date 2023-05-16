import User from "../../../../models/User";
import dbConnect from "../../../../utils/dbConnect";

export default async function user(req, res, query) {
  const { body, method } = req;
  await dbConnect();
  if (method === "GET") {
    const users = await User.find();
    res.send(users);
  } else if (method === "POST") {
    console.log("body");
    try {
      var user = new User({
        name: body.name,
        email: body.email,
        password: body.password,
      });
      user = await user.save();
      res.send(user);
    } catch (error) {
      res.send(error.message);
    }
  }
}
