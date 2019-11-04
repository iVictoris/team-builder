import React from 'react'

interface iUser {
  name: string
  title: string
  email: string
}

const User: React.FC<iUser> = ({name, title, email}) => {
  return (
    <div className='User card'>
      <div className='name'>{name}</div>
      <div className='title'>{title}</div>
      <div className='email'>{email}</div>
    </div>
  )
}

export default User
