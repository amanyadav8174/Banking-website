"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

const Sidebar = ({user}:SiderbarProps) => {
    const pathname = usePathname();
  return (
  <section className='sidebar'>
    <nav className='flex flex-col gap-4'>
        <Link href="/"
        className='mb-12 cursor-pointer  flex items-center gap-2'>
           <Image
           src="/icons/logo.svg"
           width={34}
           height={34}
           alt="UP logo"
           className="size-[50px]"/>
       
        <h1 className="sidebar-logo">UP BANK</h1>
        </Link>
         {/* use for routing one item  to another items  */}
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >

              {/*  side bar items images  */}
              <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
                 </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
   USER 
        {/* <PlaidLink user={user} /> */}
        </nav>
        <Footer user={user} />

  </section>
  )
}

export default Sidebar
