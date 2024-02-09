'use client'
import Sidebar from '../components/menuburger';
{/*import SocialBadge from 'react-social-badge';*/}


const Contacts = () =>
{
    return (
        <div id="outer-container">
            <Sidebar/>
            <main id="page-wrap">
            <div className='contactsContainer'>
                {/*<SocialBadge url={'http://github.com/nothowstorygoes'} /> */}
            </div>
        </main>
        </div>
        
        
    )
}

export default Contacts;