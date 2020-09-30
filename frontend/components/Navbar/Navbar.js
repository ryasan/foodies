import Link from 'next/link'
import Router, { useLocation } from 'next/router'
import NProgress from 'nprogress'
import { Mutation } from 'react-apollo'
import { FaPlus, FaGithub } from 'react-icons/fa'
import { Element } from 'react-scroll'

import Navbar from './NavbarStyles'
import User from '../User/User'
import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin'
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser'
import SIGN_OUT_MUTATION from '../../graphql/mutations/signout'

Router.onRouteChangeStart = () => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => {
    NProgress.done()
}
Router.onRouteChangeError = () => {
    NProgress.done()
}

const AuthView = me => (
    <Mutation
        mutation={SIGN_OUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {signout => {
            return (
                <Navbar.Nav>
                    <Link href='/account'>
                        <Navbar.Btn modifier='wideRounded'>
                            {me.username}
                        </Navbar.Btn>
                    </Link>
                    <Link href='/recipe-builder'>
                        <Navbar.Btn modifier='rounded' className='icon-btn'>
                            <FaPlus />
                        </Navbar.Btn>
                    </Link>
                    <Navbar.Btn modifier='wideRounded' onClick={signout}>
                        Signout
                    </Navbar.Btn>
                </Navbar.Nav>
            )
        }}
    </Mutation>
)

const UnAuthView = () => (
    <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
        {toggleLogin => (
            <Navbar.Nav>
                <Link href='/recipe-builder'>
                    <Navbar.Btn modifier='rounded' className='icon-btn'>
                        <FaPlus />
                    </Navbar.Btn>
                </Link>
                <Navbar.Btn modifier='wideRounded' onClick={toggleLogin}>
                    Signin
                </Navbar.Btn>
            </Navbar.Nav>
        )}
    </Mutation>
)

const NavbarComponent = () => {

    return (
        <Navbar>
            <Link href='/'>
                <Navbar.Logo>FD</Navbar.Logo>
            </Link>
            <User>
                {({ data: { me } }) => {
                    return me ? AuthView(me) : UnAuthView()
                }}
            </User>
        </Navbar>
    )
}

export default NavbarComponent
