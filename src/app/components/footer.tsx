export default function Footer() {
    const date = new Date();
    const actualYear = date.getFullYear();
    return (
        <footer className="mt-12 w-full text-center text-white backdrop-blur-sm">
            <p>&copy; {actualYear} Crafted with 💙 using <a href="https://nextjs.org" target="_blank" className="text-cyan-700 hocus:text-gray-300">Next</a> by Elías, inspired in <a href="https://porfolio.dev" target="_blank" className="text-cyan-700 hocus:text-gray-300">Midudev&apos;s Portfolio</a></p>
        </footer>
    );
}