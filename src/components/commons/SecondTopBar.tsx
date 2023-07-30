import { forwardRef } from 'react'
import '../../styles/topbar.scss'

type DivProps = React.HTMLProps<HTMLDivElement>

const SecondTopBar = forwardRef<HTMLDivElement, DivProps>(function SecondTopBar(_props, ref) {
    

    return (
        <nav className='sec-topbar' ref={ref}>
            <div className='sec-topbar-wrapper'>
                <div className='sec-topbar-bg'></div>
                <div className='sec-topbar-content'>
                    <div className='ac-ln-title'>
                        <a href='#'>Apple TV+</a>
                    </div>
                    <div className='ac-ln-menu'>
                        <div className='ac-ln-actions'>
                            <div className='ac-ln-action'>
                                <a href='#' className='ac-ln-button'>Stream Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
})

export default SecondTopBar