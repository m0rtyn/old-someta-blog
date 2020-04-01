import React from 'react'
// import { Flex } from '@theme-ui/components'

const TableOfContents = ({ children }) => {
  return (
    <div>
      <h2>🗺 Содержание</h2>
      <ul>
        {React.Children.map(children, child => child)}
      </ul>
    </div>
  )
}

export default TableOfContents
