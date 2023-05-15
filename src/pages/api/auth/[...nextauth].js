import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        if (username === "test@gmail.com" && password === "123456") {
          return { name: "test", id: 1 };
        } else {
          throw new Error("username and password did not match");
        }
      },
    }),

    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
