import { useOnlineStatus } from "../hooks/useOnlineStatus";

function Status() {
  const isOnline = useOnlineStatus();

  return (
    <div className="card">
      <h1>{isOnline ? "Đang online" : "Offline"}</h1>
    </div>
  );
}

export default Status;
