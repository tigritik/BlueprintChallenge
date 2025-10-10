import {useEffect, useState} from "react";
import {getLogs} from "../api_wrapper.ts";
import {useNavigate} from "react-router-dom";

export type Log = {
    uuid: string,
    timestamp: number,
    ip: string,
    data: string
}

function DisplayLog(props: Log) {
    return (
        <div>
            <p>{JSON.stringify(props)}</p>
        </div>
    );
}

type LogDisplayProps = {
    size: number,
    offset: number
}

function DisplayLogs(props: LogDisplayProps) {
    const [logs, setLogs] = useState<Log[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        getLogs(props.size, props.offset).then(setLogs).catch(() =>
            navigate("/logs")
        ).finally(() => setLoading(false));
    }, [props, navigate]);

    if (loading) return <p>Loading Logs...</p>;

    return (
        logs.map((log: Log, i: number) => {
            const {uuid, timestamp, ip, data} = log;
            return <DisplayLog key={i} uuid={uuid} timestamp={timestamp} ip={ip} data={data} />;
        })
    );
}

export default DisplayLogs;
