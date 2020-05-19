import { User } from "./entity/User";
import {sign} from 'jsonwebtoken'


export const createAccessToken = (user: User) => {
  return sign({userId: user.id}, 'secret', {expiresIn: "15m"})
}
export const createRefreshToken = (user:User) => {
  return sign({userId: user.id}, 'secret1', {expiresIn: "7d"})
}