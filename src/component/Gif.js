export default function Gif({ id, title, url }) {
  return (
    <div className="Gif">
      <h4>{title}</h4>
      <img id={id} src={url} alt={title} />
    </div>
  );
}
