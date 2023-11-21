import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { endPoint } from '@/services/endPoint'
import LoadingSnippet from '@/components/LoadingSnippet/LoadingSnippet';
import MainButton from '@/components/MainButton/MainButton';

export default function index() {
    const router = useRouter();
    const { id } = router.query

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})

    async function getUser() {
        setLoading(true)
        try {
            const user = await fetch(`${endPoint}/users/${id}`).then(res => res.json())
            setUser(user)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (id) getUser()
    }, [id])

    return (
        <div>
            {loading ? <LoadingSnippet /> :
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <p>{user.website}</p>

                    <MainButton text='Back' onClick={() => router.push('/users')} />
                </div>
            }
        </div>
    )
}
