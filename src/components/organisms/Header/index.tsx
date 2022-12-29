import React from 'react'
import cx from 'classnames'
import { Button } from '@/components/atoms'
import Image from 'next/image'
import profil from '@/staticdata/profil.json'
import profilPic from '../../../assets/images/profil-pic.jpeg'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cx(
        'p-12 flex items-center gap-10 bg-secondary text-white rounded-xl',
        className
      )}
    >
      <Image src={profilPic} alt="" className="rounded-full w-[300px]" />
      <div>
        <h1 className="text-7xl font-black mb-3">
          {profil.global.firstname} {profil.global.lastname.toUpperCase()}
        </h1>
        <div>
          <h2 className="text-5xl mb-2">{profil.global.role}</h2>
          <h3 className="text-xl italic text-gray-300 mb-6">
            Javascript - React.js - Node.js
          </h3>
          <div className="flex gap-3">
            <Button href={profil.socials.github} target="blank">
              Github
            </Button>
            <Button href={profil.socials.linkedin} target="blank">
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
