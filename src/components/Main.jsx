import ComicsList from "./comicsList";

export default function Main() {
  return (
    <main>
      <div className="hero"></div>
      <button className="btn-current btn-style">CURRENT SERIES</button>
      <ComicsList />
      <div className="align">
        <button className="btn-load btn-style">Load More</button>
      </div>
    </main>
  );
}
