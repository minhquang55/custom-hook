import { useOnlineStatus } from "../hooks/useOnlineStatus";

function Button() {
  const isOnline = useOnlineStatus();

  return (
    <div className="card">
      <button disabled={!isOnline}>
        Submit
      </button>
    </div>
  );
}

export default Button;
