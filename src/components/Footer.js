export default function Footer() {
  const years = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer__author">&copy; {years} Mesto Russia</p>
    </footer>
  )
}