import React from 'react'

import CartIcon from './cart'
import LeftArrowIcon from './left-arrow'
import RightArrowIcon from './right-arrow'
import MagnifierIcon from './magnifier'
import EnvelopeIcon from './envelope'
import CloseIcon from './close'
import AccountIcon from './account'
import KeyIcon from './key'
import TwitterIcon from './twitter'
import InstagramIcon from './instagram'
import FacebookIcon from './facebook'
import HomeIcon from './home'
import StoreIcon from './store'
import ExitIcon from './exit'
import DocumentIcon from './document'
import TitleIcon from './title'
import MoneyIcon from './money'
import FingerprintIcon from './fingerprint'
import FilterIcon from './filter'
import PersonAddIcon from './person-add'
import DollarIcon from './dollar'
import SmileyFaceIcon from './smiley-face'
import UploadIcon from './upload'
import DownArrowIcon from './down-arrow'
import LightBulbIcon from './light-bulb'
import ShoppingBagIcon from './shopping-bag'
import SettingsIcon from './settings'
import PersonIcon from './person'
import BriefcaseIcon from './briefcase'
import GithubIcon from './github'
import LinkedInIcon from './linkedin'
import CodepenIcon from './codepen'
import MarkerIcon from './marker'
import MapIcon from './map'
import PhoneIcon from './phone'
import HeartIcon from './heart'
import TrashIcon from './trash'
import AddIcon from './add'

const IconComponent = props => {
    switch (props.name) {
        case 'account-circle':
        case 'account-box':
            return <AccountIcon {...props} />
        case 'add':
            return <AddIcon {...props} />
        case 'briefcase':
            return <BriefcaseIcon {...props} />
        case 'cart':
            return <CartIcon {...props} />
        case 'document':
            return <DocumentIcon {...props} />
        case 'dollar':
            return <DollarIcon {...props} />
        case 'down-arrow':
            return <DownArrowIcon {...props} />
        case 'envelope':
            return <EnvelopeIcon {...props} />
        case 'exit':
            return <ExitIcon {...props} />
        case 'close':
            return <CloseIcon {...props} />
        case 'codepen':
            return <CodepenIcon {...props} />
        case 'facebook-filled':
        case 'facebook-outlined':
            return <FacebookIcon {...props} />
        case 'filter':
            return <FilterIcon {...props} />
        case 'fingerprint':
            return <FingerprintIcon {...props} />
        case 'github':
            return <GithubIcon {...props} />
        case 'heart':
            return <HeartIcon {...props} />
        case 'home':
            return <HomeIcon {...props} />
        case 'instagram-filled':
        case 'instagram-outlined':
            return <InstagramIcon {...props} />
        case 'key-filled':
        case 'key-outlined':
            return <KeyIcon {...props} />
        case 'left-arrow':
            return <LeftArrowIcon {...props} />
        case 'light-bulb':
            return <LightBulbIcon {...props} />
        case 'linkedin':
            return <LinkedInIcon {...props} />
        case 'magnifier':
        case 'magnifier-texture':
            return <MagnifierIcon {...props} />
        case 'map':
            return <MapIcon {...props} />
        case 'marker':
            return <MarkerIcon {...props} />
        case 'money':
            return <MoneyIcon {...props} />
        case 'person':
            return <PersonIcon {...props} />
        case 'person-add':
            return <PersonAddIcon {...props} />
        case 'phone':
            return <PhoneIcon {...props} />
        case 'right-arrow':
            return <RightArrowIcon {...props} />
        case 'settings':
            return <SettingsIcon {...props} />
        case 'shopping-bag':
            return <ShoppingBagIcon {...props} />
        case 'smiley-face':
            return <SmileyFaceIcon {...props} />
        case 'store':
            return <StoreIcon {...props} />
        case 'title':
            return <TitleIcon {...props} />
        case 'trash':
            return <TrashIcon {...props} />
        case 'twitter-filled':
        case 'twitter-outlined':
            return <TwitterIcon {...props} />
        case 'upload-filled':
        case 'upload-outlined':
            return <UploadIcon {...props} />
        default:
            throw new Error('Icon not found')
    }
}

export default IconComponent
