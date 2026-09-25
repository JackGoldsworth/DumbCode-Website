'use client'

import { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-groovy'

/**
 * Client-side syntax-highlighted code block.
 * Prism runs against the DOM after mount because highlighting cannot happen
 * during server rendering.
 */
export function CodeBlock({
  language,
  code,
}: {
  language: string
  code: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current)
    }
  }, [code])

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-white/5 bg-surface-900">
      <pre className="dumbcode-scrollbar overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code ref={ref} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}

/** Inline code chip. */
export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-surface-700 px-1.5 py-0.5 text-xs text-ink-100">
      {children}
    </code>
  )
}

/** Yellow "Note" callout. */
export function NoteTag({ note }: { note: string }) {
  return (
    <div className="my-4 flex overflow-hidden rounded-lg text-xs">
      <span className="bg-yellow-400 px-2.5 py-1.5 font-semibold text-surface-950">
        Note
      </span>
      <span className="bg-surface-700 px-3 py-1.5 text-ink-200">{note}</span>
    </div>
  )
}
