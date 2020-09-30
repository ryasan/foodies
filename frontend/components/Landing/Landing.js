import { useState, useEffect, useRef } from 'react'

import Landing from './LandingStyles'
import Icon from '../icons/index'
import { repoUrl } from '../../constants'

const text = [
    {
        title: "Satisfy Your Stomach's Curiosity",
        subtitle: 'Try Something New for Dinner'
    },
    {
        title: 'Polish Pans, Knives, and Your Craft',
        subtitle: 'Choose from an endless number of recipes to try'
    },
    {
        title: 'Cook up Something Fun',
        subtitle: 'Create something with ingredients you have on hand'
    }
]

const scrollDown = () => {}

const LandingComponent = () => {
    const [activeIdx, setActiveIdx] = useState()

    const rotate = () => {
        setActiveIdx(prev => (prev + 1) % 3)
    }

    useEffect(() => {
        const interval = setInterval(rotate, 7000)
        setActiveIdx(0)
        return () => clearInterval(interval)
    }, [])

    return (
        <Landing>
            {activeIdx >= 0 && (
                <Landing.TextContainer>
                    <Landing.Title>{text[activeIdx].title}</Landing.Title>
                    <Landing.Subtitle>
                        {text[activeIdx].subtitle}
                    </Landing.Subtitle>
                </Landing.TextContainer>
            )}
            <Landing.Overlay1 active={activeIdx === 0} />
            <Landing.Overlay2 active={activeIdx === 1} />
            <Landing.Overlay3 active={activeIdx === 2} />
            <Landing.IconBtn
                onClick={() => window.open(repoUrl, '_blank').focus()}>
                <Icon name='github' />
            </Landing.IconBtn>
            <Landing.ScrollBtn to='home' smooth>
                <Icon name='down-arrow' />
            </Landing.ScrollBtn>
        </Landing>
    )
}

export default LandingComponent
