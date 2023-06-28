export default function getAuthors(req, res) {
  try {
    const authors = [
      { name: "Author 1", city: "Santa Fe", country: "Argentina" },
      { name: "Author 2", city: "Mendoza", country: "Argentina" },
    ];
    return res.status(200).json({
      success: true,
      response: authors,
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
