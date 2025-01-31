export default function ComicCard({ image, title }) {
  return (
    <div className="comic-card">
      <img src={image} alt={title} />
      <a href="#">{title}</a>
    </div>
  );
}
