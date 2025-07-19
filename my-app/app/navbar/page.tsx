
export default function Nabar() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-blue-500 hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="text-blue-500 hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}