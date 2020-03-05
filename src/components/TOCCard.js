import React from 'react'
import Link from 'gatsby-link'

import './TOCCard.css'

const LessonCard = ({ content, title }) => (
  <div className='main-card'>
    <h1 className='lesson-title gradient'>{title}</h1>
    <div className='lesson-content'>
      <ul>
        {content.map((lesson) => {
          const { path, title } = lesson.node.frontmatter
          return (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default LessonCard
