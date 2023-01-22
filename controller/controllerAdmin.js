import userShema from "../model/userShema.js";

export const dataUSer = async (req, res, next) => {
  try {
    const data = await userShema.find();
    console.log(data, `kocak`);
    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
