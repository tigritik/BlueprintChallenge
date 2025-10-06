import datetime

logs = []

async def add_log(ip: str, data: str):
    logs.append({
        "id": "uuid",
        "timestamp": datetime.datetime.now().timestamp(),
        "ip": ip,
        "data": data
    })

async def fetch_logs(count: int, offset: int):
    return logs[offset:offset+count]

async def get_log_count():
    return len(logs)
