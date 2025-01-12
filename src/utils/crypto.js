import bcrypt from 'bcrypt'

export const hashPassword = (password) =>
  bcrypt.hash(password, 12).catch(() => null)

export const comparePassword = ({ password, hash }) =>
  bcrypt.compare(password, hash).catch(() => false)
