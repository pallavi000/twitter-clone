import User from "../../../../models/User";

export default async function user(req, res, query) {
  const { body, method } = req;
  if (method === "GET") {
    const user = await User.findById(req.query.id);
    res.send(user);
  } else if (method === "POST") {
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
        const uploadpath = __dirname + "../../../../public/uploads" + imageName;
        await fs.promises.writeFile(uploadpath, fileData);

        const picture = "/uploads/" + imageName;

        var user = await User.findByIdAndUpdate(
          req.query.id,
          {
            image: picture,
          },
          { new: true }
        );
        res.send(user);
      });
    } catch (error) {
      res.send(error.message);
    }
  }
}
