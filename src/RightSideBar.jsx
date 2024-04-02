import calendar_2020q4_2x from "./icons/calendar_2020q4_2x.png"
import keep_2020q4v3_2x from "./icons/keep_2020q4v3_2x.png"
import tasks2_2x from "./icons/tasks2_2x.png"
import contacts_2x from "./icons/contacts_2x.png"

function RightSideBar({data}){
    return(
        <>
        <section class="app-container" >

<div class="app-group">

  <div class="app-item">
    <button class="btn">
      <img src={calendar_2020q4_2x} alt="Calendar" class="btn-icon btn-icon-sm" />
    </button>
  </div>

  <div class="app-item">
    <button class="btn">
      <img src={keep_2020q4v3_2x} alt="Keep" class="btn-icon btn-icon-sm" />
    </button>
  </div>

  <div class="app-item">
    <button class="btn">
      <img src={tasks2_2x} alt="Tasks" class="btn-icon btn-icon-sm" />
    </button>
  </div>

  <div class="app-item">
    <button class="btn">
      <img src={contacts_2x} alt="Contacts" class="btn-icon btn-icon-sm" />
    </button>
  </div>

  <div class="btn btn-nofill" >
    <div class="hrt-rule btn-icon-sm"></div>
  </div>

  <div class="app-item">
    <button class="btn">
      <img src="app/assets/icons/add_black_24dp.svg" alt="" class="btn-icon btn-icon-sm btn-icon-disabled" />
    </button>
  </div>

</div>


<button class="btn">
  <img src="./app/assets/icons/chevron_right_black_24dp.svg" alt="" class="btn-icon btn-icon-sm btn-icon-alt" />
</button>

</section>
        </>
    )
}

export default RightSideBar;