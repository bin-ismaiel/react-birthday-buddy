export default function ListItem({ age, image, name }) {
  return (
    <li>
      <div>
        <img alt={`img for ${name}`} src={image} width="50px" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{age} years</p>
      </div>
    </li>
  );
}
