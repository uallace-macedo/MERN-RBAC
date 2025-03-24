import UserModel from '../models/user.model.js';

const validateUserRegister = async (req) => {
  const { name, password, role } = req.body;
  if(!name || !password || !role) return { success: false, message: 'Todos os campos são obrigatórios!' };

  const userExists = await UserModel.findOne({ name });
  if(userExists) return { success: false, message: 'Esse usuário já existe' };

  return { success: true };
}

export { validateUserRegister };
