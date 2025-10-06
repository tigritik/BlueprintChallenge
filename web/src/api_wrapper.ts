import type {Log} from "./components/Log.tsx";

const apiEndpoint = "http://localhost:8000/api/v1"

export async function encrypt(key: string, payload: string) {
    const response = await fetch(`${apiEndpoint}/encrypt`,
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({key, payload})
        }
    );

    if (!response.ok) return "";

    return (await response.json()).data as string;
}

export async function decrypt(key: string, payload: string) {
    const response = await fetch(`${apiEndpoint}/decrypt`,
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({key, payload})
        }
    );

    if (!response.ok) return "";

    return (await response.json()).data as string;
}

export async function getLogs(size: number, offset: number) {
    const response = await fetch(`${apiEndpoint}/logs?size=${size}&offset=${offset}`);
    if (!response.ok) return [];
    return await response.json() as Log[];
}
