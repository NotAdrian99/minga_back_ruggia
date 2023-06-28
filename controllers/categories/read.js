import category from "../../models/category.js";

export default async function getCategory(req, res) {
  try {
    console.log("asdasd");
    const categories = await category.find();
    return res.status(200).json({
      success: true,
      response: categories,
      message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      response: null,
      message: error.message,
    });
  }
}
