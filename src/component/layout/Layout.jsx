import React from 'react'
import NavbarSimple from '../navBar/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Layout() {
    return (
        <>
            <NavbarSimple />
            <Outlet />
            <Footer/>
        </>
    )
}
