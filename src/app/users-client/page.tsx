"use client"
import React, { useState, useEffect } from "react"
type User = {
    id: string
    name: string
    username: string
    email: string
    phone: string
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json()
                setUsers(data)
            } catch (e: any) {
                setError(e.message)
                console.error(e)
            } finally {
                setLoading(false)
            }

        }
        fetchData()
    }, [])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <ul className="space-y-4 p-4">
                {users.map(user => (
                    <li key={user.id} className="p-4 bg-white shadow-md rounded-md text-gray-800">
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}