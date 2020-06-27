import React, { useState, useEffect } from 'react'

const Test = () => {

    const [user, setUser] = useState(null)
    const [searchQuery, setSearchQuery] = useState()

    useEffect(() => {


        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`)
            const resJson = await response.json()
            setUser(resJson[0])

        }

        fetchData();

    }, [searchQuery])

    return (
        <div>
            <input
                type='search'
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}

            />


            {
                user ? (
                    <div>

                        <h2>{user.name}</h2>
                        <h2>{user.username}</h2>
                        <h2>{user.email}</h2>
                    </div>


                ) : <span>user can not find</span>


            }


        </div>
    )
}

export default Test
