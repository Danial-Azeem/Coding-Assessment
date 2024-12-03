import jwt from "jsonwebtoken";
import axios from "axios";

// dummy user
const dummy_user = { username: "danial_1", password: "pass1234" };

export const login = (req, res) => {
  const { username, password } = req.body;

  if (dummy_user.username == username && dummy_user.password == password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({
      username: dummy_user.username,
      token: token,
      message: "Signed In Succussfully.",
    });
  } else {
    res.status(400).json({
      message:
        "Invalid username or password. Please enter correct username or password to sign in.",
    });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await axios.get(process.env.POSTS_URL);
    res.json(posts.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

export const userInfo = async (req, res) => {
  try {
    res.status(200).json({
      username: req.user.username,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user info" });
  }
};
