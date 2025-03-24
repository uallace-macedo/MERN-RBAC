const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if(!allowedRoles.includes(req.user.role)) return res.status(403).json({ success: false, message: 'Usuário não autorizado!' });
    next();
  };
}

export default authorizeRoles;
