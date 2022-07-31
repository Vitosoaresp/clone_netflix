import { ArrowBack } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";

export function MovieTrailer() {

  const { key } = useParams();

  return(
    <div className="w-screen h-screen">
      <Link
        to="/"
        className="fixed top-10 left-6 m-4 text-4xl font-bold text-white"
      >
        <ArrowBack />
      </Link>
      <iframe src={ `https://www.youtube.com/embed/${key}` } height="100%" width="100%" />
    </div>
  );
}