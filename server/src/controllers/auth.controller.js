import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '../models/user.model.js';
import { validateUserRegister } from '../utils/auth.utils.js';

const register = async (req, res) => {
  const isUserValid = await validateUserRegister(req);
  if(!isUserValid.success) return res.status(400).json({ success: false, message: isUserValid.message });

  try {
    const { name, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ name, password: hashedPassword, role });

    res.status(201).json({ success: true, message: `Usuário registrado como: ${user.name}` })
  } catch (error) {
    res.status(500).json({ success: false, message: `Erro interno no servidor: ${error.message}` });
  }
}

const login = async (req, res) => {
  const { name, password } = req.body;
  if(!name || !password) return res.status(400).json({ success: false, message: 'Por favor, forneça todos os dados.' });

  try {
    const user = await UserModel.findOne({ name });

    const correctPassword = await bcrypt.compare(password, (user.password || ''));

    if(!correctPassword) return res.status(400).json({ success: false, message: 'Usuário ou senha incorretos.' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
    })

    res.status(200).json({ success: true, message: 'Logado com sucesso!' });
  } catch (error) {
    res.status(500).json({ success: false, message: `Erro interno no servidor: ${error.message}` });
  }
}

const AuthController = {
  register: async (req, res) => register(req, res),
  login: async (req, res) => login(req, res),
}

export default AuthController;
