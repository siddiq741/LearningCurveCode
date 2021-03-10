import React,{useState} from "react";
import StageOne from './StageOne' ;
import StageTwo from './StageTwo' ;
import StageThree from './StageThree';

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

const MCQBuilder = () => {
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

export default MCQBuilder