import React from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
  const contactList = useSelector((state)=>state.contactList) //store에서 읽어오는건 useSelector
  return (
    <div>
        <SearchBox/>
        {contactList.map((item)=><ContactItem item={item}/>)}
    </div>
  )
}

export default ContactList