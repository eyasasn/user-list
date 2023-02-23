import './SingleUserCard.css'
import location from '../../../icons/location-icon.svg'
import mail from '../../../icons/mail-icon.svg'

function SingleUserCard({ firstName, lastName, city, country, email, picture }) {
    return (
        <div className='user-card'>
            <div className='pic-container'>
                <img className='profile-pic' src={picture} alt='profile-pic' />
            </div>
            <div className='content'>
                <div>
                    <div className='intro'> Hi, my name is  </div>
                    <div className='full-name'>{firstName} {lastName}</div>
                </div>
                <div>
                    <div className='bottom-content'> <img className='icon' src={location} alt='location' />
                        <div> {city}, {country}</div>
                    </div>
                    <div className='bottom-content'> <img className='icon' src={mail} alt='mail' />
                        <div>{email}</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleUserCard