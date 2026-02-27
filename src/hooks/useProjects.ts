import { useState, useEffect } from 'react';
import type { EcosystemProject } from '../data/ecosystemData';

interface UseProjectsResult {
    projects: EcosystemProject[];
    loading: boolean;
    error: string | null;
}

let cachedProjects: EcosystemProject[] | null = null;

export function useProjects(): UseProjectsResult {
    const [projects, setProjects] = useState<EcosystemProject[]>(cachedProjects ?? []);
    const [loading, setLoading] = useState<boolean>(cachedProjects === null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (cachedProjects !== null) {
            setProjects(cachedProjects);
            setLoading(false);
            return;
        }

        let cancelled = false;
        setLoading(true);

        fetch('/projects.json')
            .then((res) => {
                if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);
                return res.json() as Promise<EcosystemProject[]>;
            })
            .then((data) => {
                if (!cancelled) {
                    cachedProjects = data;
                    setProjects(data);
                    setLoading(false);
                }
            })
            .catch((err: Error) => {
                if (!cancelled) {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => { cancelled = true; };
    }, []);

    return { projects, loading, error };
}
