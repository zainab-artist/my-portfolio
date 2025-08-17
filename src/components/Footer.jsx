export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Contact Me</h3>
        <div className="social-links">
          <a href="#" className="social-link">GitHub</a>
          <a href="zainab_h8210" className="social-link">Instagram</a>
          <a href="zainabhaidari246@gmail.com" className="social-link">Email</a>
        </div>
        <p>© {new Date().getFullYear()} Zainab Haidari</p>
      </div>
    </footer>
  );
}