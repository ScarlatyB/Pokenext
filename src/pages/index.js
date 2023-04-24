import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { useState } from 'react'
import Card from '@/components/Card'
import AllPokemons from './allpokemons'



export default function Home ({pokemon}) {
  return (
    <div className={styles.title_container}>
     <h1>Random Poke<span>Mon</span></h1>
     
    </div>
  )
}

