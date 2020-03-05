/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'

const Footer = () => {
  return (
    <div
      css={css`
        width: 100%;
        margin-top: 30px;
        padding: 15px 0;
        color: #fff;
        text-align: center;
      `}
    >
      ©{' '}
      <a
        css={css`
          color: #ccc;
          :hover {
            color: #fff;
          }
        `}
        href='https://falesim.com'
      >
        falesim
      </a>
    </div>
  )
}

export default Footer
