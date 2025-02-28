import { debounce, sum } from 'lodash'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import Message from '@/ui/chat/Message'

import { useHistory } from '@/hooks/useHistory'
import { usePrevious } from '@/hooks/usePrevious'
import * as types from '@/types'

const avgRowHeight = 48
const numToShow = Math.ceil(window.innerHeight / avgRowHeight) + 1
const overscan = numToShow

type MessageListProps = {
  chat: types.Chat
}

export default function MessageList(props: MessageListProps) {
  const { chat } = props

  const [startIdx, setStartIdx] = useState(0)
  const [prevHeightFromBottom, setPrevHeightFromBottom] = useState(0)
  const [heights, setHeights] = useState<number[]>([])

  const fetchMore = useHistory(chat)
  const scrollableRef = useRef<HTMLDivElement>(null)
  const prev = usePrevious(chat.messages[0].id)

  useEffect(() => {
    if (numToShow > chat.messages.length) fetchMore()
  }, [chat.messages.length, fetchMore])

  // Handles scrolling when new messages are displayed.
  useLayoutEffect(() => {
    const div = scrollableRef.current
    if (!div) return

    // If we are already at the bottom when new messages are added, scroll to
    // the new bottom. Also handles scrolling to bottom on page load.
    if (prevHeightFromBottom <= 5)
      div.scrollTo({
        top: div.scrollHeight,
        behavior: 'instant',
      })
    // If we aren't at the bottom, calc new scroll top so it is the same
    // dist from the bottom as before. Only happens on new msgs at top of page.
    else if (chat.messages[0].id === prev)
      div.scrollTo({
        top: div.scrollHeight - div.clientHeight - prevHeightFromBottom,
        behavior: 'instant',
      })
  }, [chat.messages, prev, prevHeightFromBottom])

  const handleScroll = async (e: React.UIEvent<HTMLDivElement>) => {
    const t = e.target as HTMLDivElement
    const bound = t.getBoundingClientRect()
    const nodes = t.children[0].children

    const heightFromBottom = t.scrollHeight - t.clientHeight - t.scrollTop
    const _heights = heights.slice()
    let start = _heights.length

    // Scrolling up
    if (heightFromBottom > prevHeightFromBottom) {
      // Start at 1, 0th node is ref bottomDiv
      for (let i = 1; i < nodes.length; i++) {
        const b2 = nodes[i].getBoundingClientRect()
        if (b2.y < bound.bottom) break

        start++
        if (i > overscan) {
          const b = nodes[i - overscan].getBoundingClientRect()
          _heights.push(b.height)
        }
      }
    } else if (heightFromBottom < prevHeightFromBottom) {
      start = startIdx
      for (let i = startIdx - _heights.length; i >= 0; i--) {
        const b2 = nodes[i].getBoundingClientRect()
        if (b2.y > bound.bottom) break

        if (i === 0 && t.clientHeight + t.scrollTop === t.scrollHeight) {
          start = 0
          _heights.length = 0
        } else {
          start--
          _heights.pop()
        }
      }
    } else return

    setStartIdx(start)
    setHeights(_heights)
    setPrevHeightFromBottom(heightFromBottom)

    if (t.scrollTop <= 10) await fetchMore()
  }

  return (
    <div
      ref={scrollableRef}
      onScroll={debounce(handleScroll, 50)}
      className="z-30 flex h-full overflow-y-scroll py-1"
    >
      <div
        className="relative mt-auto flex w-full flex-col-reverse"
        style={{ paddingBottom: sum(heights) }}
      >
        <div />
        {chat.messages
          .slice(
            Math.max(0, startIdx - overscan),
            startIdx + numToShow + overscan,
          )
          .map((message) => (
            <Message key={message.id} data={message} />
          ))}
      </div>
    </div>
  )
}
