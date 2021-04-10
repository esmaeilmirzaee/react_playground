import { useEffect, useRef } from 'react'

export function useMeasurePosition(update) {
  const ref = useRef(null)

  useEffect(() => {
    update({
      height: ref.current.offsetHeight,
      top: ref.current.offsetTop
    })
  })

  return ref
}