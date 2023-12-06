export function Card(props) {
  return (
    <div class="card col-4">
      <img class="cars-img-top" src={props.obj.thumbnail} alt="logo" />
      <div class="card-body">
        <h1 class="card-title">{props.obj.title}</h1>
        <h2 class="card-text">{props.obj.price}</h2>
      </div>
    </div>
  );
}
