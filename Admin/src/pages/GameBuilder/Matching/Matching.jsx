import React, { useState } from 'react'
import './Matching.css'
import StageOne from './StageOne'
import StageTwo from './StageTwo'
import StageThree from './StageThree'

const Matching = () => {
  const [questionsCount, setQuestionsCount] = useState(0)
  const [stageOneCheck, setStageOneCheck] = useState(false)
  const [stageTwoCheck, setStageTwoCheck] = useState(false)
  const [data, setData] = useState('')
  const [isCallSuccessful, setIsCallSuccessful] = useState(false)

  return (
    <div className="container root">
      <StageOne
        fetchQuestionsCount={(value) => {
          setQuestionsCount(value)
        }}
        fetchData={(value) => {
          setData(value)
        }}
        fetchStageOneCheck={(value) => {
          setStageOneCheck(value)
        }}
      />
      <StageTwo
        data={data}
        questionsCount={questionsCount}
        stageOneCheck={stageOneCheck}
        fetchStageTwoCheck={(value) => {
          setStageTwoCheck(value)
        }}
        fetchData={(data) => {
          setData(data)
        }}
      />
      <StageThree
        check={stageTwoCheck}
        count={questionsCount}
        data={data}
        updateIsCallSuccessful={(value) => {
          setIsCallSuccessful(value)
          window.location.reload()
        }}
      />
    </div>
  )
}

export default Matching
