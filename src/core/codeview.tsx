/*
 * @Author: saber2pr
 * @Date: 2019-04-04 16:19:20
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-04 18:02:52
 */
import React, { CSSProperties } from 'react'
import { Para } from './paragraph'
import { HighLight } from './highlight'
import { KeyWords, KEYWORDS } from './keywords'
import { dedup } from './utils/dedup'

export interface Code {
  content: string
  start?: string
  end?: string
  keywords?: KeyWords
}

const pstyle: CSSProperties = {
  textAlign: 'left'
}

const prestyle: CSSProperties = {
  textAlign: 'left',
  backgroundColor: '#282c34',
  color: 'white',
  borderRadius: '10px',
  padding: '10px',
  overflowX: 'auto',
  lineHeight: '1.5rem'
}
/**
 * Code
 * @export
 * @param {Code} {
 *   content,
 *   start = '```ts\n',
 *   end = '```',
 *   keywords
 * }
 * @returns
 */
export const Code = ({
  content,
  start = '```ts\n',
  end = '```',
  keywords = KEYWORDS
}: Code) => {
  const $keywords = dedup(keywords, 'word')
  return (
    <>
      {content.split(start).map((c, index) => {
        if (c.includes(end)) {
          const result = c.split(end)
          return (
            <React.Fragment key={'ju2wa8owexjvxhn26h' + index}>
              <pre style={prestyle}>
                <HighLight content={result[0]} keywords={$keywords} />
              </pre>
              <Para content={result[1]} style={pstyle} />
            </React.Fragment>
          )
        } else {
          return (
            <Para
              content={c}
              style={pstyle}
              key={`jssjx2jjjebnh3do7lp${index}`}
            />
          )
        }
      })}
    </>
  )
}