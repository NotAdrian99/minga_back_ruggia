export default function getUser(req, res) {
  try {
    const users = [
      {
        email: "User1@gmail.com",
        password: "password123",
        photho: "urldelafoto",
      },
      {
        email: "User2@gmail.com",
        password: "password123",
        photho: "urldelafoto",
      },
    ];
    return res.status(200).json({
      success: true,
      response: users,
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
