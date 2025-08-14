import "./Gif.css";

export default function Gif({ id, title, url }) {
  return (
    <a href={`#${id}`} className="Gif">
      <h4>{title}</h4>
      <img id={id} src={url} alt={title} />
    </a>
  );
}
