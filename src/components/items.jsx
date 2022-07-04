function items(props) {
  return (
    <div className=" w-[300px] text-black h-fit flex flex-col container mx-auto relative space-y-2 ">
      <img
        className="w-[300px] h-[250px] object-cover"
        src={`https://image.tmdb.org/t/p/original/${props.item?.backdrop_path}`}
        alt={props.movie?.title}
      />
      {props.item.backdrop_path ? null : (
        <p className="text-3xl text-center text-red-700  absolute top-[100px] left-0 right-0">
          Image not found
        </p>
      )}
      <div className=" w-[300px] h-fit  ">
        <h1 className=" text-lg font-bold">{props.item?.original_title}</h1>

        <p className=" text-sm">Released: {props.item?.release_date}</p>
        <p className=" text-lg">Average Rating : {props.item?.vote_average}</p>
      </div>
    </div>
  );
}
export default items;
