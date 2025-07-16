'use client'
import { LogOut, Moon, Settings, Sun, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { SidebarTrigger } from './ui/sidebar'

function Navbar() {

    const { theme,setTheme} = useTheme()
  return (
    <nav className='p-4 flex justify-between items-center'>
        {/*Collapse button */}
        <SidebarTrigger />

        {/* Middle Title */}
        <div className='flex items-center gap-4'>
        <Link href="/">dashboard</Link>
       
       {/* Theme Toggle*/}
        
        <Button onClick={()=>(theme==="light")?setTheme("dark"):setTheme("light")} variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      

    {/* User profile */}
  
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><User/>  Profile</DropdownMenuItem>
    <DropdownMenuItem><Settings /> Setting</DropdownMenuItem>
    <DropdownMenuItem  variant='destructive'><LogOut  /> Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        </div>
            
    </nav>
  )
}

export default Navbar