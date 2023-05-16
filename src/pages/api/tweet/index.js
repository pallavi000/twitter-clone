import formidable from "formidable";
import Tweet from "../../../../models/Tweet";
import dbConnect from "../../../../utils/dbConnect";
const fs = require("fs");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function tweet(req, res, query) {
  await dbConnect();
  const { body, method } = req;
  if (method === "POST") {
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Error uploading image" });
        }
        const { originalFilename, filepath } = files.image;
        const fileData = await fs.promises.readFile(filepath);

        const imageName =
          Math.random() + "." + originalFilename.split(".").pop();
        const uploadpath =
          __dirname + "../../../../../public/uploads/" + imageName;
        await fs.promises.writeFile(uploadpath, fileData);

        const picture = "/uploads/" + imageName;

        var tweet = new Tweet({
          tweet: fields.tweet,
          image: picture,
          user_id: fields.user_id,
        });
        await tweet.save();

        return res.send(tweet);
      });
    } catch (error) {
      res.send(error.message);
    }
  }
}
