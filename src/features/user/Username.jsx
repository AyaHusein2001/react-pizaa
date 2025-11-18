import { useSelector } from "react-redux";
function Username() {
  const userName = useSelector((store) => store.user.username);
  return (
    <>
      {userName ? (
        <div className="hidden text-sm font-semibold md:block">{userName}</div>
      ) : null}
    </>
  );
}

export default Username;
