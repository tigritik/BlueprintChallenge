import datetime

from src.db import insert, select


def add_log(ip: str, data: str):
    insert("logs", "(ts, ip, data)", (datetime.datetime.now().timestamp(), ip, data))


def fetch_logs(count: int, offset: int):
    logs = select("logs")
    return list(
        map(
            lambda x: {"uuid": x[0], "timestamp": x[1], "ip": x[2], "data": x[3]},
            logs[offset : offset + count],
        )
    )


def get_log_count():
    logs = select("logs")
    return len(logs)
