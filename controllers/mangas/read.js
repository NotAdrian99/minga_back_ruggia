export default function getManga(req, res) {
  try {
    const mangas = [
      { author_id: 1, title: "Manga 1" },
      { author_id: 2, title: "Manga 2" },
    ];
    return res.status(200).json({
      success: true,
      response: mangas, //poner ok
      message: "/endpoint", //poner la palabrita que corresponda
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      response: null,
      message: error.message,
    });
  }
}
