import {useSearchParams} from "react-router-dom";
import DisplayLogs from "../components/Log.tsx";
import Navbar from "../components/Navbar.tsx";

function ViewLogs() {
    const [searchParams, _] = useSearchParams();

    function validQuery() {
        return (
            searchParams.has("size") && searchParams.has("offset")
        );
    }

    if (!validQuery()) return <p>Invalid Log Request</p>;

    const size = Number(searchParams.get("size"));
    const offset = Number(searchParams.get("offset"));

    return (
        <>
            <Navbar />
            <h1>View Logs</h1>
            <div>
                <DisplayLogs size={size} offset={offset} />
            </div>
        </>
    );
}

export default ViewLogs;
