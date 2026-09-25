'use client'

import { useEffect, useRef } from 'react'
import { allMembers } from '../data/team'
import BackgroundImage from './BackgroundImage'

const TeamCarousel = () => {
  const members = allMembers.map((value) => value.name)
  const scrollableMembers = members.concat(members)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame: number
    const callback = (time: DOMHighResTimeStamp) => {
      frame = requestAnimationFrame(callback)
      if (divRef.current !== null) {
        const speed = 0.05
        divRef.current.scrollLeft =
          (time * speed) % (divRef.current.scrollWidth / 2)
      }
    }
    frame = requestAnimationFrame(callback)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      ref={divRef}
      className="dumbcode-scrollbar grid w-full grid-flow-col gap-2 overflow-x-hidden py-4"
    >
      {scrollableMembers.map((member, key) => (
        <TeamBubble key={key} member={member} />
      ))}
    </div>
  )
}

const TeamBubble = ({ member }: { member: string }) => {
  const memberData = allMembers.find(
    (element) => element.name.toLowerCase() === member.toLowerCase()
  )

  return (
    <div className="group w-32 shrink-0">
      <div className="aspect-square rounded-full bg-surface-800 p-0.5 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-brand-500/60">
        <div className="aspect-square overflow-hidden rounded-full">
          <BackgroundImage
            alt={member}
            sizes="128px"
            src={`/images/people/${memberData?.imageName}`}
          />
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-ink-300">{memberData?.name}</p>
    </div>
  )
}

export default TeamCarousel
