import Message from "../../../../../models/Message";
import dbConnect from "../../../../../utils/dbConnect";

export default async function message(req, res, query) {
  const { method, body } = req;
  await dbConnect();
  if (method === "GET") {
    const message = await Message.find({ chat_id: req.query.id });
    res.send(message);
  } else if (method === "POST") {
    var message = new Message({
      chat_id: body.chat_id,
      receiver_id: body.receiver_id,
      sender_id: body.sender_id,
      message: body.message,
    });
    message = await message.save();
    res.send(message);
  }
}
