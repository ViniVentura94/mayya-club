
import { scroller } from 'react-scroll'

export function scrollToSection(id: string) {
    scroller.scrollTo(id, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80,
    })
}
