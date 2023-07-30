import { forwardRef, useRef } from 'react'
import '../../styles/topbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from "@fortawesome/free-brands-svg-icons"
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { LinkHeaders } from '../../data/home'

const TopBar = forwardRef<HTMLDivElement>(function TopBar(_props, ref) {
    const flyoutRef = useRef<HTMLDivElement | null>(null)

    const handleOnMouseEnter = () => {
        if ( flyoutRef.current ) {
            flyoutRef.current.style.display = 'block'
        } else {
            
        }
    }

    const handleOnMouseLeave = () => {
        if ( flyoutRef.current ) {
            flyoutRef.current.style.display = 'none'
        }
    }

    return (
        <nav className='topbar' ref={ref}>
            <div className='topbar-content'>
                <ul className='topbar-list'>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faApple} style={{ fontSize: '1.5em' }}/>
                        </a>
                    </li>

                    {
                        LinkHeaders.map((item, index) => (
                            <li key={index} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                                <a href='#'>
                                    {item.title}
                                </a>
                            </li>
                        ))
                    }

                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '16px' }}/>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '17px' }}/>
                        </a>
                    </li>
                </ul>

                <FlyOut ref={flyoutRef}/>
            </div>
        </nav>
    )
})

const FlyOut = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className='topbar-flyout-container' ref={ref}>
            <div className='flyout-scroll-container'>
                <div className='flyout-content'>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
})

export default TopBar