export default function getChapter(req, res) {
  try {
    const chapters = [
      { manga_id: 1, title: "Chapter 1" },
      { manga_id: 2, title: "Chapter 2" },
    ];
    return res.status(200).json({
      success: true,
      response: chapters,
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
