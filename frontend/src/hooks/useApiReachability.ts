import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../config'

type ApiReachability = 'checking' | 'reachable' | 'unavailable'

export function useApiReachability(): ApiReachability {
    const [state, setState] = useState<ApiReachability>('checking')

    useEffect(() => {
        const controller = new AbortController()
        const timeout = window.setTimeout(() => controller.abort(), 8000)

        fetch(`${API_BASE_URL}/api/status`, {
            cache: 'no-store',
            signal: controller.signal,
        })
            .then(async (response) => {
                if (!response.ok) throw new Error('API check failed')
                const result: { status?: string; api?: string } = await response.json()
                setState(
                    result.status === 'ONLINE' || result.api === 'responding'
                        ? 'reachable'
                        : 'unavailable',
                )
            })
            .catch(() => {
                if (!controller.signal.aborted) setState('unavailable')
            })
            .finally(() => window.clearTimeout(timeout))

        return () => {
            window.clearTimeout(timeout)
            controller.abort()
        }
    }, [])

    return state
}