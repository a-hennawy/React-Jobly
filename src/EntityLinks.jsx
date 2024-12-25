import { Link } from "react-router-dom";

const EntityLinks = ({ obj }) => {
  if (Object.hasOwn(obj, "handle")) {
    return (
      <>
        <Link key={obj.handle} to={`/companies/${obj.handle}`}>
          {obj.name}
        </Link>
        <br />
      </>
    );
  } else if (Object.hasOwn(obj, "id")) {
    return (
      <>
        <Link key={obj.id} to={`/jobs/${obj.id}`}>
          {obj.title}
        </Link>
        <br />
      </>
    );
  }
};

export default EntityLinks;
