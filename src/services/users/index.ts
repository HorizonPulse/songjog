import jwt from 'jsonwebtoken';

import { SignupInterface } from './types';
import configs from '../../config';

import { createUser, fetchUserByEmail, fetchUserByUserName } from './users';
import { comparePassword, hashPassword } from '../../utils/bcrypt';
import { createOrReturnTransaction } from '../../utils/utils';
import { sequelize } from '../../db';

export async function signUp(data: SignupInterface) {
  const { email, password, username, tx } = data;
  const newUser = await createOrReturnTransaction(tx, async (transaction) => {
    // validate duplicate email address
    const emailExists = await fetchUserByEmail(email, transaction);
    if (emailExists) {
      throw new Error('Someone already taken this email address.');
    }

    // validate duplicate username
    const usernameExists = await fetchUserByUserName(username, transaction);
    if (usernameExists) {
      throw new Error('Someone already taken this username.');
    }

    // handle password
    const { hash, salt } = await hashPassword(password);
    const user = await createUser(
      {
        ...data,
        hash: hash,
        salt: salt
      },
      transaction
    );
    return user;
  });

  return newUser;
}

export async function signin(opts: { email: string; password: string }) {
  const { email, password } = opts;
  return await createOrReturnTransaction(null, async (transaction) => {
    const user = await fetchUserByEmail(email, transaction);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // verify password
    const match = await comparePassword(password, user.salt, user.hash);
    if (!match) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id }, configs.get('jwt.secret'), {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: 86400 // 24 hours
    });

    return token;
  });
}

export async function signout(opts: { userId: number; token: string }) {
  const { userId, token } = opts;
  await createOrReturnTransaction(null, async (transaction) => {
    await sequelize.models.TokenBlackList.create({
      user_id: userId,
      token,
      transaction
    });
    return true;
  });
}
