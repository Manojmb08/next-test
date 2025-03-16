import Link from "next/link"
export const Navigation = () => {
    return (
        <nav>
            <Link href="/" className="mr-4">Home</Link>
            <Link href="/about" className="mr-4">About</Link>
            <Link href="/products/mac" className="mr-4">Mac</Link>

        </nav>
    )
}