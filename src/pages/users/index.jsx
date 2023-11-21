import React, { useState, useEffect } from 'react'
import { endPoint } from '@/services/endPoint'
import { useRouter } from 'next/router'
import LoadingSnippet from '@/components/LoadingSnippet/LoadingSnippet';
import DataTable from '@/components/DataTable/DataTable';

export default function users() {
    const router = useRouter();

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    async function getUsers() {
        setLoading(true)
        try {
            const users = await fetch(`${endPoint}/users`).then(res => res.json())
            setUsers(
                users.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    website: user.website,
                    rowClick: () => router.push(`/users/${user.id}`)
                }))
            )
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            {loading ? <LoadingSnippet /> :
                <div>
                    {users.length > 0 ?
                        <DataTable
                            key={"id"}
                            tableRows={users}
                            tableColumns={["name", "email", "website"]}
                        /> : <div>No users</div>
                    }
                </div>
            }
        </div>
    )
}
