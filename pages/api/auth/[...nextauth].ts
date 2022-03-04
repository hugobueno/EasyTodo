import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
   
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'GOOGLE_ID',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'GOOGLE_SECRET',
    }),
  ],
  secret: process.env.SECRET,
})