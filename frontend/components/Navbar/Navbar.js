import Link from 'next/link'
import Router, { useLocation } from 'next/router'
import NProgress from 'nprogress'
import { Mutation } from 'react-apollo'
import { Element } from 'react-scroll'

import Navbar, { NavWrapper, Content } from './NavbarStyles'
import User from '../User/User'
import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin'
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser'
import SIGN_OUT_MUTATION from '../../graphql/mutations/signout'
import Icon from '../icons'

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
                            <Icon name='add' />
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
                        <Icon name='add' />
                    </Navbar.Btn>
                </Link>
                <Navbar.Btn modifier='wideRounded' onClick={toggleLogin}>
                    Signin
                </Navbar.Btn>
            </Navbar.Nav>
        )}
    </Mutation>
)

const NavbarComponent = props => {
    const userView = () => (
        <User>
            {({ data: { me } }) => {
                return me ? AuthView(me) : UnAuthView()
            }}
        </User>
    )

    switch (props.position) {
        case 'sticky':
            return (
                <NavWrapper>
                    <Navbar.Sticky>
                        <Navbar.Logo href='/'>FD</Navbar.Logo>
                        {userView()}
                    </Navbar.Sticky>
                    <Content>{props.children}</Content>
                </NavWrapper>
            )
        case 'absolute':
        default:
            return (
                <NavWrapper>
                    <Navbar.Absolute>
                        <Navbar.Logo href='/'>FD</Navbar.Logo>
                        {userView()}
                    </Navbar.Absolute>
                    <Content>{props.children}</Content>
                </NavWrapper>
            )
    }
}

export default NavbarComponent
