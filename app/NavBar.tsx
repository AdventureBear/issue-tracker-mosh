'use client'
import Link from "next/link"
import { AiFillBug } from "react-icons/ai";
import {usePathname} from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
    const currentPath = usePathname()
    console.log(currentPath)
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
                        className ={classNames({
                            'hover:text-zinc-800 transition-colors': true,
                            'text-zinc-900': item.href === currentPath,
                            'text-zinc-500': item.href !== currentPath
                        })}
                        // className='text-zinc-400 hover:text-zinc-600 transition-colors'
                        href={item.href}>{item.label}</Link>
                )}
                {/*<Link href='/issues'>Issues</Link>*/}
            </ul>
            </nav>
    )
}
export default NavBar
