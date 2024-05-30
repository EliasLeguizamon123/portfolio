export default function Footer() {
    const date = new Date();
    const actualYear = date.getFullYear();
    return (
        <footer className="text-white w-full text-center backdrop-blur-sm">
            <p>{actualYear} &copy; Crafted with ❤️ using <a href="https://nextjs.org" target="_blank" className="text-cyan-700 hocus:text-gray-300">Next</a> by Elias</p>
        </footer>
    );
}