import { useEffect, useState } from "react"
import check_box_outline_blank_black_24dp from "./icons/access_time_filled_black_24dp.svg"
import drag_indicator_black_24dp from "./icons/drag_indicator_black_24dp.svg"
import star_border_black_24dp from "./icons/star_border_black_24dp.svg"
import archive_black_24dp from "./icons/archive_black_24dp.svg"
import delete_black_24dp from "./icons/delete_black_24dp.svg"
import mark_as_unread_black_24dp from "./icons/mark_as_unread_black_24dp.svg"
import access_time_filled_black_24dp from "./icons/access_time_filled_black_24dp.svg"
import useCustomHook from "./useCustomHook"

function SentMail(){
    const data = useCustomHook("https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:sent")

    function convertTimestampToTime(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${meridiem}`;
      }
  
      return(
  <>
  {console.log("Data is ",data)}
  <div class="mail">
                {data && data.map((value)=>(<>
                  <div class="inbox-message-item">
  
  <div class="checkbox" style={{ marginRight: "-12px" }} >
    <button class="btn">
      <img src={check_box_outline_blank_black_24dp} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
    </button>
  </div>
  
  <div class="message-group-hidden">
    <button class="btn-alt btn-nofill drag-indicator" >
      <img src={drag_indicator_black_24dp} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
    </button>
  </div>
  
  <button class="btn star" style={{ margin: "0" }}>
    <img src={star_border_black_24dp} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon"/>
  </button>
  
  <div class="message-default" >
    <div class="message-sender message-content unread" >
      <span >{value.payload.headers.find(item=>item.name == "To").value}</span>
    </div>
  
    <div class="message-subject message-content unread">
      <span>{value.payload.headers.find(item=>item.name == "Subject").value}</span>
    </div>
  
    <div class="message-seperator message-content"> - </div>
  
    <div class="message-body message-content">
      <span> {value.snippet}</span>
    </div>
    
    <div class="gap message-content" > &nbsp; </div>
  
    <div class="message-date center-text unread" >
      <span>{convertTimestampToTime(value.payload.headers.find(item=>item.name == "Date").value)}</span>
    </div>
  
  </div>
  
  <div class="message-group-hidden" >
    <div class="inbox-message-item-options">
      <button class="btn">
        <img src={archive_black_24dp} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>
  
      <button class="btn">
        <img src={delete_black_24dp} alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>
  
      <button class="btn">
        <img src={mark_as_unread_black_24dp} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>
  
      <button class="btn">
        <img src={access_time_filled_black_24dp} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>
    </div>
  </div>
  </div>        
                </>))}
                
  
            </div>
          </>
      )
}

export default SentMail;