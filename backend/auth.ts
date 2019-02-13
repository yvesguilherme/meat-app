import { Request, Response } from 'express';
import { User, users } from './users';

import * as jwt from 'jsonwebtoken';

/** Trata as respostas. */
export const handleAuthentication = (req: Request, resp: Response) => {
  const user: User = req.body;
  if (isValid(user)) {
    const dbUser = users[user.email];
    const token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, 'meat-api-password');
    resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
  } else {
    resp.status(403).json({ message: 'Dados inválidos.' });
  }
}
/** Verifica se o usuário é válido. */
function isValid(user: User): boolean {
  if (!user) {
    return false;
  }
  const dbUser = users[user.email];
  return dbUser !== undefined && dbUser.matches(user);
}
