import './navbar2.css'
import {FiMenu} from 'react-icons/fi'

function Navbar2() {
  return (
    <div className='navbar2'>
      <FiMenu className='menuicon2'/>
        <ul className='ulContainer'>
            <li>All</li>
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Card</li>
            <li>Sell</li>
        </ul>
        
    </div>
  )
}

export default Navbar2