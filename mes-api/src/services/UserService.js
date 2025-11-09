const userRepo = require('../repositories/UserRepository');
const { hashPassword , comparePassword} = require('../utils/hash');
const { generateToken } = require('../utils/token');


const registerUser = async (userData) => {
  const existingUser = await userRepo.findUserByEmail(userData.email);
  if (existingUser) {
    throw new Error('Email déjà utilisé');
  }

  const hashedPassword = await hashPassword(userData.password);
  const newUser = {
    name: userData.name,
    email: userData.email,
    password: hashedPassword,
    role: userData.role
  };

  return await userRepo.createUser(newUser);
};

const loginUser = async (email, password) => {
  const user = await userRepo.findUserByEmail(email);
  if (!user) throw new Error('Utilisateur introuvable');

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error('Mot de passe incorrect');

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
};

module.exports = { registerUser , loginUser };
