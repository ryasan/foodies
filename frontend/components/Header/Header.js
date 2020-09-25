import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Mutation } from 'react-apollo'
import { FaPlus, FaGithub } from 'react-icons/fa'

import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin'
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser'
import SIGN_OUT_MUTATION from '../../graphql/mutations/signout'
import User from '../User/User'
import button from '../shared/button'
import Header from './HeaderStyles'

Router.onRouteChangeStart = () => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => {
    NProgress.done()
}
Router.onRouteChangeError = () => {
    NProgress.done()
}

const AuthView = me => {
    return (
        <Mutation
            mutation={SIGN_OUT_MUTATION}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
            {signout => {
                return (
                    <Header.Nav>
                        <Link href='/account'>
                            <Header.Btn modifier='wideRounded'>{me.username}</Header.Btn>
                        </Link>
                        <Link href='/recipe-builder'>
                            <Header.Btn modifier='rounded' className='icon-btn'>
                                <FaPlus />
                            </Header.Btn>
                        </Link>
                        <Header.Btn modifier='wideRounded' onClick={signout}>
                            Signout
                        </Header.Btn>
                    </Header.Nav>
                )
            }}
        </Mutation>
    )
}

const UnAuthView = () => {
    return (
        <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
            {toggleLogin => (
                <Header.Nav>
                    <Link href='/recipe-builder'>
                        <Header.Btn modifier='rounded' className='icon-btn'>
                            <FaPlus />
                        </Header.Btn>
                    </Link>
                    <Header.Btn modifier='wideRounded' onClick={toggleLogin}>
                        Signin
                    </Header.Btn>
                </Header.Nav>
            )}
        </Mutation>
    )
}

const HeaderComponent = () => {
    return (
        <Header>
            <Link href='/'>
                <Header.Logo>NP</Header.Logo>
            </Link>
            <User>
                {({ data: { me } }) => {
                    return me ? AuthView(me) : UnAuthView()
                }}
            </User>
        </Header>
    )
}

export default HeaderComponent
