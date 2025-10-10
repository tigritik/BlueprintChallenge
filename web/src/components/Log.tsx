import {useEffect, useState} from "react";
import {getLogs} from "../api_wrapper.ts";
import {useNavigate} from "react-router-dom";
import "./log.css"

export type Log = {
    uuid: string,
    timestamp: number,
    ip: string,
    data: string
}

function DisplayLog(props: Log) {
    const date = new Date(props.timestamp*1000).toLocaleString("en-US");

    return (
        <div className="log-entry">
            <div className="log-header">
                <span className="log-uuid">{props.uuid}</span>
                <span className="log-timestamp">{date}</span>
            </div>
            <div className="log-details">
                <div><strong>IP:</strong> {props.ip}</div>
                <div><strong>Data:</strong> {props.data}</div>
            </div>
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

    if (!logs.length) return <p>No Logs Available!</p>;

    return (
        logs.map((log: Log, i: number) => {
            const {uuid, timestamp, ip, data} = log;
            return <DisplayLog key={i} uuid={uuid} timestamp={timestamp} ip={ip} data={data} />;
        })
    );
}

export default DisplayLogs;
