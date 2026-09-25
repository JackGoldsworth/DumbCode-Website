import Image from 'next/image'

/**
 * Full-bleed cover image. Replaces the legacy hand-rolled <img> wrapper with
 * next/image for automatic optimization; `sizes` is required because the
 * container width varies by breakpoint.
 */
const BackgroundImage = ({
  src,
  alt,
  className,
  priority = false,
  sizes = '100vw',
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}) => {
  return (
    <div className={'relative h-full w-full overflow-hidden ' + (className ?? '')}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  )
}

export default BackgroundImage
