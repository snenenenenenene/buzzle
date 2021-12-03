import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="bg-main-1 md:sticky top-0 h-20">
      <div className="flex flex-wrap flex-row items-center">
        <div className="cursor-pointer mb-0 mx-auto">
            <div className="mx-1.5 text-xl flex h-40">
            <Link href="/">
            <img src="/logo.png" alt="Buzzle" className="h-3/4"/>
            </Link>
            </div>
        </div>
      </div>
    </header>
    )
}
