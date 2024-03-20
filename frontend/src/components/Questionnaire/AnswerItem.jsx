import React from 'react'

function AnswerItem({text,position}) {
  return (
    <div>
        <span>{position}-</span>
        <span>{text}</span>
    </div>
  )
}

export default AnswerItem