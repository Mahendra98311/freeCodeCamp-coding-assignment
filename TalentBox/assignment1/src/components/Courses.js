import React from 'react';
import DevicesIcon from '@mui/icons-material/Devices';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import TaskIcon from '@mui/icons-material/Task';
import LanguageIcon from '@mui/icons-material/Language';
import InsertChartIcon from '@mui/icons-material/InsertChart';
function Courses() {
  return (
    <div>
    <div className="just00">
    <h2 className="just01">Welcome to freeCodeCamp.org</h2>
    <h4 className="just02">"I have not failed. I've just found 10,000 ways
    that won't work."</h4>
    <h6 className="just03">- Thomas A. Edison</h6>
    </div>
    <div className="button-wrap">
      <div className="button1">
        <button href='#' className="btn1"><DevicesIcon/>(New) Responsive Web Design Certification (300 hours)</button>
      </div>
      <div className="button2">
      <button href='#' className="btn2"><DevicesIcon/>(New) Responsive Web Design Certification (300 hours)</button>
      </div>
      <div className="button3">
      <button href='#' className="btn3"><JavascriptIcon/>Javascript Algorithims and Data Structures Certification (300 hours)</button>
      </div>
      <div className="button4">
      <button href='#' className="btn4"><LanguageIcon/>Front End Development Libraries Certification (300 hours)</button>
      </div>
      <div className="button5">
      <button href='#' className="btn5"><InsertChartIcon/>Data Visualization Certification (300 hours)</button>
      </div>
      <div className="button6">
      <button href='#' className="btn6"><StorageIcon/>Back End Development and API's Certification (300 hours)</button>
      </div>
      <div className="button7">
      <button href='#' className="btn7"><TaskIcon/>Quality Assurance Certification (300 hours)</button>
      </div>
      </div>
    </div>
  )
}

export default Courses