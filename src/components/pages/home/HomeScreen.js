import { useEffect, useState } from 'react'
import axios from 'axios'
import './HomeScreen.css'

// Components are here
import Header from '../../common/header/Header'
import SingleUserCard from '../../common/singleUserCard/SingleUserCard'


function HomeScreen() {
    const [userList, setUserList] = useState([])

    // Main API Call
    const listUsers = async () => {
        axios
            .get('https://randomuser.me/api/?results=12')
            .then(response => setUserList(response.data.results))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        listUsers()
    }, [])



    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='all-user-cards'>
                {userList.map((user, key) => (
                    <SingleUserCard
                        key={key}
                        firstName={user.name.first}
                        lastName={user.name.last}
                        city={user.location.city}
                        country={user.location.country}
                        email={user.email}
                        picture={user.picture.large}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomeScreen