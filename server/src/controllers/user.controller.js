const user = async (req, res) => res.status(200).json({  success: true, message: 'Bem-vindo, <USER>' });
const manager = async (req, res) => res.status(200).json({ success: true, message: 'Bem-vindo, <MANAGER>' });
const admin = async (req, res) => res.status(200).json({ success: true, message: 'Bem-vindo, <ADMIN>' });

const UserController = {
  user: async (req, res) => await user(req, res),
  manager: async (req, res) => await manager(req, res),
  admin: async (req, res) => await admin(req, res),
};

export default UserController;
