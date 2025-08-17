export default function Header({ message }) {
  const quotes = [
    "The secret of success is getting started.",
    "Every day is a new opportunity.",
    "Coding is like magic!"
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Zainab Haidari</h1>
        <p className="header-subtitle">{message}</p>
        <p className="quote">{randomQuote}</p>
      </div>
    </header>
  );
}