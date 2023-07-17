import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'
import TopCards from "@/components/TopCards";
import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrders";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";


export default function Home() {
    const {data: session} = useSession()
    const router = useRouter()
    if(session === null) {
        router.push('/login')
    }
    return (
        <>
            <Head>
                <title>Tjakrabirawa Dashboard</title>
                <meta name='description' content='Tjakrabirawa Dashboard'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <main className='bg-gray-100 min-h-screen'>
                <Header/>
                <TopCards/>
                <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
                    <BarChart/>
                    <RecentOrders/>

                </div>
            </main>
        </>
    )
}
