import { useSession } from 'next-auth/react';
import React from 'react';
import { ButtonLogout, Logo, Nav, NavContainer, PhotoContainer, User, UserData } from './styles';
import Image from 'next/image';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { signOut } from 'next-auth/react'
import { RiMastodonLine } from 'react-icons/ri'
const Navbar: React.FC = () => {
  const { data: session } = useSession()

  return (
    <NavContainer>
      <Nav>
        {session ? (
          <>
            <UserData>
              <PhotoContainer>
                {session?.user?.image && (
                  <Image alt={`image de ${session?.user.name}`} width={100} height={100} layout='responsive' src={session.user.image} />
                )}
              </PhotoContainer>
              <User >
                <p>{session?.user?.name}</p>
                <span>{session?.user?.email}</span>
              </User>
            </UserData>
            <ButtonLogout onClick={() => signOut()}><FiLogOut /></ButtonLogout>
          </>
        ) : (
          <Logo>
            <h1><RiMastodonLine />EasyTodo</h1>
          </Logo>
        )}
      </Nav>
    </NavContainer>
  )
}

export default Navbar;