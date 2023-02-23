import './SingleUserCard.css'
import location from '../../../icons/location-icon.svg'
import mail from '../../../icons/mail-icon.svg'

function SingleUserCard() {
    return (
        <div className='user-card'>
            <div className='pic-container'>
                <img className='profile-pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuabej-KB_M2RIiJ2gOpR7c_KbHu8NBLqrmg&usqp=CAU' alt='profile-pic' />
            </div>
            <div className='content'>
                <div>
                    <div className='intro'> Hi, my name is  </div>
                    <div className='full-name'>Penny Allen</div>
                </div>
                <div>
                    <div className='bottom-content'> <img className='icon' src={location} alt='location' />
                        <div> City, Country</div>
                    </div>
                    <div className='bottom-content'> <img className='icon' src={mail} alt='mail' />
                        <div>example@example.com</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleUserCard