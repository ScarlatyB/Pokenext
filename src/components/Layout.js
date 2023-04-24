
import Navbar from "@/components/Navbar"
import Footer from "./Footer"
import Head from 'next/head'




export default function Layout({ children }){


    return(
    <>
    <Head>
      <title>Pokenext</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/pokebola.png" />
    </Head>
    <Navbar/>
    <main className="main-container">{children}</main>
    <Footer/>
    
    </>
    )
}