import {
  login as loginService,
  signup as signupService,
} from "../../services/auth/authService.mjs";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await signupService(email, password);
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { login, signup };
