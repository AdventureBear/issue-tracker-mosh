import Link from "next/link"
import { AiFillBug } from "react-icons/ai";


const NavBar = () => {
    const navbar = [{label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}]
    return (
        <nav className='flex px-5 h-14 items-center space-x-6 border-b mb-5'>
            <Link href='/'><AiFillBug />
            </Link>
            <ul className='flex space-x-6'>
                {navbar.map((item) =>
                    <Link
                        key={item.href}
                        className='text-zinc-400 hover:text-zinc-600 transition-colors'
                        href='/'>{item.label}</Link>
                )}
                {/*<Link href='/issues'>Issues</Link>*/}
            </ul>
            </nav>
    )
}
export default NavBar
