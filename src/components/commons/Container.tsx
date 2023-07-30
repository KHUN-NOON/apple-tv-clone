import { useRef, useEffect } from 'react'
import '../../styles/container.scss'
import SecondTopBar from './SecondTopBar'
import TopBar from './TopBar'

interface IContainer {
    children: React.ReactElement | React.ReactElement[]
}

const Container = (props: IContainer) => {
    const topbarRef = useRef<HTMLDivElement | null>(null)

    const secTopbarRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const topbarOffset = topbarRef.current?.offsetTop ?? 0

        const handleScroll = () => {
            if ( window.scrollY > topbarOffset ) {
                if ( secTopbarRef.current) {
                    secTopbarRef.current.style.top = '0'
                }
            } else {
                if ( secTopbarRef.current) {
                    secTopbarRef.current.style.top = 'var(--r-globalnav-height, 0)'
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        topbarRef?.current?.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            topbarRef.current?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='container'>
            <TopBar ref={topbarRef}/>
            <SecondTopBar ref={secTopbarRef}/>
            {props.children}
        </div>
    )
}

export default Container