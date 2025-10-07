import psycopg2


def _connect():
    connection = psycopg2.connect(
        host='localhost',
        dbname='blueprint_db',
        user='admin',
        password='admin'
    )

    return connection

def insert(table: str, cols: str, values: tuple) -> None:
    connection, cursor = None, None

    try:
        connection = _connect()
        cursor = connection.cursor()
        cursor.execute(
            f"INSERT INTO {table} {cols} VALUES {values}"
        )
        connection.commit()
    finally:
        if cursor: cursor.close()
        if connection: connection.close()

def select(table: str) -> list:
    connection, cursor = None, None

    try:
        connection = _connect()
        cursor = connection.cursor()
        cursor.execute(f"SELECT * FROM {table}")
        return cursor.fetchall()
    finally:
        if cursor: cursor.close()
        if connection: connection.close()
