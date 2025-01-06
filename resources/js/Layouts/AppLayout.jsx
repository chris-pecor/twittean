import React from 'react';
import GuestLayout from './GuestLayout';
import AuthenticatedLayout from './AuthenticatedLayout';


export default function AppLayout({ user, children }) {

    const Layout = user ? AuthenticatedLayout : GuestLayout;
    
    
    return (
        <Layout>
            {children}
        </Layout>
    );
};
