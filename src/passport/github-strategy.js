import { Strategy as GithubStrategy } from "passport-github2";
import passport from "passport";
import UserDao from "../daos/mongodb/user.dao.js";
const userDao = new UserDao();

const strategyOptions = {
  clientID: "be411904c6c9a8f7257e",
  clientSecret: "65e969ba22b77bb190028164b76a19f34838d0c8",
  callbackURL: "http://localhost:8080/users/profile-github",
};

const registerOrLogin = async (accessToken, refreshToken, profile, done) => {
  const email =
    profile._json.email !== null ? profile._json.email : profile_json.blog;
  const user = await userDao.getByEmail(email);
  if (user) return done(null, user);
  const newUser = await userDao.registerUser({
    first_name: profile._json.name.split(" ")[0],
    last_name: profile._json.name.split(" ")[1],
    email,
    password: "",
    isGithub: true,
  });
  return done(null, newUser);
};

passport.use("github", new GithubStrategy(strategyOptions, registerOrLogin));
