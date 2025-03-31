import jwt from "jsonwebtoken";

// Authenticate user when user places order, add product to the cart or update the order

const authUser = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized, Login again." });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.error("User Authentication Error:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Server Error (auth): " + error.message,
      });
  }
};

export default authUser;
