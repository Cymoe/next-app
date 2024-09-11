import React from 'react'

interface Props {
    children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
    return (
        <div className='flex'>
            <aside className='bg-gray-200 p-5'>Admin Sidebar</aside>
            <main className='p-5'>{children}</main>
        </div>
    )
}

export default AdminLayout