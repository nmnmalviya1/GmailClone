import gmailLogo from './icons/logo_gmail_lockup_default_1x_r2.png'
import help_outline_black_24dp from "./icons/help_outline_black_24dp.svg"
import settings_black_24dp from "./icons/settings_black_24dp.svg"
import apps_black_24dp from "./icons/apps_black_24dp.svg"

function GmailHeader({data}){
    return(
        <>
            <header class="header">

<div class="header-group">

  <div class="icons">
    <button id="header-menu" class="btn header-menu tooltip" data-info="Main menu" >
      <img src="/app/assets/icons/menu_black_24dp.svg" alt="Main menu" class="btn-icon btn-icon-alt"/>
    </button>
  </div>

  <a href="#" class="header-logo" >
    <img src={gmailLogo} alt="Gmail" />
  </a>

</div>

<form class="header-search" action="">

  <div class="icons">
    <button id="js-header-search" class="btn btn-nofill tooltip"  data-info="Search">
      <img src="/app/assets/icons/search_black_24dp.svg" alt="Search"class="btn-icon btn-icon-alt" />
    </button>
  </div>

  <input type="search" class="header-search-input" placeholder="Search mail" />
  
  <div class="icons">
    <button type="reset" class="btn" data-info="Options">
      <img src="/app/assets/icons/clear_black_24dp.svg" alt="Options" class="btn-icon btn-icon-alt"/>
    </button>
  </div>

  <div class="icons">
    <button id="header-search-options" class="btn tooltip" data-info="Options">
      <img src="/app/assets/icons/arrow_drop_down_black_24dp.svg" alt="Options" class="btn-icon btn-icon-alt"/>
    </button>
  </div>

</form>

<div class="header-group profile" >

    <div class="icons">
      <button id="header-info" class="btn">
        <img src={help_outline_black_24dp} alt="Support" class="btn-icon btn-icon-alt" />
      </button>
    </div>

    <div class="icons">
      <button id="header-settings" class="btn" data-info="Settings">
        <img src={settings_black_24dp} alt="Settings"  class="btn-icon btn-icon-alt" />
      </button>
    </div>

    <div class="icons">
      <button id="header-apps" class="btn" >
        <img src={apps_black_24dp} alt="Google apps" class="btn-icon btn-icon-alt" />
      </button>
    </div>

    <div class="icons">
      <button id="header-profile" class="btn tooltip" >
        <img src="/app/assets/img/profile.jpg" class="btn-icon header-profile" />
      </button>
    </div>
</div>

</header>
        </>
    )
}

export default GmailHeader;