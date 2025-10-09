import {useSearchParams} from "react-router-dom";
import DisplayLogs from "../components/Log.tsx";
import Navbar from "../components/Navbar.tsx";
import {useEffect, useState} from "react";
import PageSelect from "../components/PageSelect.tsx";
import {getLogCount} from "../api_wrapper.ts";

function ViewLogs() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [size, setSize] = useState(10);
    const [offset, setOffset] = useState(0);
    const [totalLogs, setTotalLogs] = useState(0);

    useEffect(() => {
        function validQuery() {
            return (
                searchParams.has("size") && searchParams.has("offset")
            );
        }

        if (validQuery()) {
            setSize(Number(searchParams.get("size")));
            setOffset(Number(searchParams.get("offset")));
        }
        else {
            setSize(10);
            setOffset(0);
            setSearchParams({"size": "10", "offset": "0"});
        }
    }, [searchParams, setSearchParams]);

    useEffect(() => {
        getLogCount().then(logs => setTotalLogs(logs-1));
    }, []);

    return (
        <>
            <Navbar />
            <h1>View Logs</h1>
            <div>
                <p>{`Page ${(offset/size)+1}/${Math.trunc(totalLogs/size)+1}`}</p>
                <DisplayLogs size={size} offset={offset} />
            </div>
            <PageSelect
                changeOffset={setOffset} changeSize={setSize}
                minOffset={0} maxOffset={totalLogs-(totalLogs%size)} pageSize={size}
            />
        </>
    );
}

export default ViewLogs;
