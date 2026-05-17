export type RequestRecord = {
  id: number;
  name: string;
  location: string;
  contact: string;
  requestType: "Donor" | "Receiver";
  createdAt: string;
};

const STORAGE_KEY = "bloodbridge_requests";

export function getStoredRequests(): RequestRecord[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as RequestRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function addStoredRequest(request: Omit<RequestRecord, "id" | "createdAt">) {
  if (typeof window === "undefined") return;

  const saved = getStoredRequests();
  const nextRequest: RequestRecord = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...request,
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved, nextRequest]));
}
