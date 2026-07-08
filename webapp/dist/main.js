(() => {
    "use strict";    
    
    window.registerPlugin('ir.elecserv', new class {
        initialize(registry, store) {

            /* استایل به استایل برنامه اضافه میشود */
            var styles = `
                html, body, .channel-header__description{
                    direction:rtl !important
                }
                
                html, body, div, p, input, button{
                    font-family: VazirWOL, 'Open Sans', sans-serif !important
                }

                .radio input[type="radio"], .radio-inline input[type="radio"], .checkbox input[type="checkbox"], .checkbox-inline input[type="checkbox"] {
                    margin-left: 0;
                    margin-right: -18px;
                }

                .radio-inline, .checkbox-inline {
                    padding-left: 5px;
                    padding-right: 22px;
                }


                .admin-sidebar {
                    right: 0;
                    left: auto;
                }

                .admin-console {
                    padding-left: 0;
                    padding-right: 220px;
                }

                .form-horizontal .form-group {
                    margin-right: 0px;
                    margin-left: 0px;
                }

                .admin-console .form-horizontal .control-label{
                    text-align:right;
                }

                .admin-sidebar .nav-pills__container ul {
                    padding-right: 0;
                }

                .admin-sidebar .scrollbar--view{
                    margin-left: -8px;
                    margin-right: 0px;
                }

                .user__name{
                    direction:ltr;
                    text-align:right;
                }

                .backstage-navbar__back .fa {
                    margin-left: 7px;
                    margin-right: 0;
                    transform: scaleX(-1);                    
                }

                .admin-sidebar .sidebar-category .category-title .category-icon {
                    margin-right: 0;
                    margin-left: 6px;
                }

                /* عکس بزرگ تیم در بخش تنظیمات تیم در ادمین */
                .large-team-image-col{
                    padding-right: 0px;
                    padding-left: 20px;
                }

                .large-team-image-col .TeamIcon{
                    margin-right: 0px;
                    margin-left: 12px;
                }

                .admin-sidebar .scrollbar--view{
                    margin-right: 0px!important;
                }

                /* صفحه User Configuration در پنل ادمین */
                .AdminUserCard__body{
                    padding:12px 178px 20px 20px!important;
                }

                .SystemUserDetail__field-icon{
                    margin:0 0 0 8px!important;
                }

                /* صفحه User Configuration در پنل ادمین فاصله نوشته با تکست باکس */
                @media screen and (max-width: 960px){
                    .system-users__filter-row>label span {
                        padding-right: 0;
                        padding-left: 8px;
                    }
                }

                /* آیکن بازکشت از صفحه ادمین */
                .admin-console .admin-console__header.with-back .back{
                    transform: rotate(180deg);
                    margin-left: 20px;
                    margin-right: 0px;
                }

                /* فیلدهایی که باید در بخش ادمین از چپ به راست باشند */
                #MetricsSettings\\.ListenAddress{
                    direction:ltr!important;
                    text-align:left!important;
                }

                /* در پنل ادمین دکمه بالای صفحه */
                .RenewLicenseCard.TrialLicense button.ContactSales {
                    margin-left: auto;
                    margin-right: 10px;
                }

                /* دکمه کنار لیست اینپوت ها برای اضافه کردن */
                .multi-select__container .btn {
                    margin-right: 16px;
                    margin-left: 0;
                }

                /* در بخش کانال ها کنسول سیستم آیکون کنار لیست */
                .ChannelsList .DataGrid .DataGrid_cell .channel-icon {
                    margin-left: 10px;
                    margin-right: 0;
                }

                /* دیتا گیرید در بخش کنسول سیستم، اضافه کردن عضو */
                .DataGrid .DataGrid_row, .DataGrid .DataGrid_header{
                    padding-left:0px;
                    padding-right: 18px;
                }

                /*//////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                // ثبت نام کاربر جدید ////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////*/
                /* فلش بالای صفحه پس از ایجاد اکانت */
                .signup-header i.fa-1x.fa-angle-left{
                    transform: rotate(180deg);
                    margin: 0px 0px 0px 4px;
                    transform-origin: 60% 60%;
                }
            
                /* متن خوش آمد گویی در صفحه بعدی */
                #tutorialIntroContent .tutorial__steps{
                    direction: rtl;
                    text-align: right;
                }

                /* دکمه پایین صفحه خوش آمدگویی */
                .tutorial-steps__container .tutorial-skip{
                    margin-left: 0px;
                    margin-right: 13px;
                }

                /* راهنما بالای بخش چت پس از اولین ورود */
                .tip-overlay.tip-overlay--chat{
                    margin-left:-300px;
                }

                /*//////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////*/

                #SidebarContainer{
                    left:auto;
                    right:0;
                }

                @media screen and (min-width: 769px)
                {
                    #SidebarContainer+.inner-wrap #app-content{
                        margin-right: 240px;
                        margin-left: auto;
                    }

                    .channel-header .flex-child:first-child{
                        padding: 0 0 0 28px;
                    }

                    .sidebar--right{
                        right:auto;
                        left:0px;
                        -webkit-transform: translateX(-100%);
                        -moz-transform: translateX(-100%);
                        -ms-transform: translateX(-100%);
                        -o-transform: translateX(-100%);
                        transform: translateX(-100%);
                    }

                    .move--left #post-list{
                        margin-right: 0!important;
                        margin-left:400px;!important
                    }

                    #AddChannelDropdown>ul{
                        left: 0px!important;
                        right: auto!important;
                    }

                    .sidebar--left .team__header .header__info .sidebar-header-dropdown__icon, #SidebarContainer .team__header .header__info .sidebar-header-dropdown__icon, .sidebar--menu .team__header .header__info .sidebar-header-dropdown__icon, .admin-sidebar .team__header .header__info .sidebar-header-dropdown__icon{
                        left: -5px!important;
                        right: auto!important;
                    }            
                }

                /*//////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                ///// نمایش موبایل //////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////*/

                @media screen and (max-width: 768px)
                {
                    .mobile-main-menu .Menu__content.dropdown-menu .MenuItem>button, .mobile-main-menu .Menu__content.dropdown-menu .MenuItem>a{
                        text-align: right;
                    }

                    .Menu .MenuItem span.icon{
                        padding-left: 12px;
                        padding-right: 0px;
                    }
                 
                    #SidebarContainer{
                        -webkit-transform: translate3d(290px, 0, 0);
                        -moz-transform: translate3d(290px, 0, 0);
                        -ms-transform: translate3d(290px, 0, 0);
                        -o-transform: translate3d(290px, 0, 0);
                        transform: translate3d(290px, 0, 0);
                    }

                    .search-bar__container .search-form__container {
                        padding: 4px 0 0 20px;
                    }

                    #header-popover .close {
                        padding-top: 17px;
                    }

                    #navbar_wrapper .navbar-default .Menu__close {
                        padding-top: 17px;
                        top: 100px;
                    }

                    /* عکس کوچک کنار آواتار پست ها */
                    .post .post__img{
                        padding-left: 10px;
                        padding-right: 0px;
                    }
                    
                    /* به اشتراک گذاری برای مردم : لینک اشتراک */
                    .InvitationModalMembersStep .share-link .share-link-input{
                        width:70px;
                        flex-shrink: 1;
                    }

                    .InvitationModalMembersStep .share-link .share-link-input-button{
                        flex-shrink: 0;
                        width: 120px;
                        border-radius: 4px 0 0 4px;
                    }

                    .InvitationModalMembersStep .share-link .share-link-input-button span {
                        margin-right: 0;
                        margin-left: 9px;
                    }

                }

                /*//////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////*/

                #navbar_wrapper .navbar-default .navbar-toggle.navbar-right__icon {
                    margin: 9px 0 0 10px;
                }

                #sbrSidebarCollapse span{
                    -webkit-transform: scaleX(-1);
                    -ms-transform: scaleX(-1);
                    transform: scaleX(-1);
                }

                .post-menu{
                    left: 0px!important;
                    right: auto!important;
                }

                /* right menu icons padding */
                #SidebarContainer .SidebarChannel .SidebarLink:hover, #SidebarContainer .SidebarChannel .SidebarLink.menuOpen{
                    padding-right:16px;
                    padding-left:5px;
                }

                #SidebarContainer .DirectChannel__profile-picture{
                    margin-left: 9px;
                    margin-right: 0px;
                }

                #SidebarContainer .SidebarChannel .SidebarLink>i{
                    margin-right: -2px;
                    margin-left: 6px;
                }

                #sidebar-left .scrollbar--view{
                    margin-right: 0px!important;
                    margin-left: -8px!important;
                }

                #SidebarContainer .SidebarChannelGroupHeader_groupButton{
                    text-align:right;
                }

                #SidebarContainer .icon-rotate-minus-90{
                    -webkit-transform: rotate(90deg);
                    -ms-transform: rotate(90deg);
                    transform: rotate(90deg);
                }

                #headerUsername{
                    direction:ltr!important;
                }

                
                #SidebarContainer .Menu.MenuWrapperAnimation-enter-done .Menu__content.dropdown-menu{
                    left: auto!important;
                    right: 0px!important;
                }

                .Menu .MenuItem>div, .Menu .MenuItem>button, .Menu .MenuItem>a{
                    text-align: right;
                }

                .Menu .MenuItem span.icon {
                    padding-right: 0px;
                    padding-left: 12px;
                }

                .custom_status__icon{
                    margin-left: 10px;
                    margin-right: 0px;
                }

                /* ایکون استوس */
                .statusSuggestion__icon {
                    margin-right: 0px;
                    margin-left: 15px;
                }

                .pulsating_dot{
                    margin-right: auto;
                    margin-left: 0px;
                }

                #SidebarContainer .SidebarChannelGroupHeader_groupButton .SidebarChannelGroupHeader_text{
                    padding-left: 0px;
                    padding-right: 16px;
                }

                .channel-header__title.dropdown .a11y__popup.Menu.MenuWrapperAnimation-enter-done  .Menu__content.dropdown-menu{
                    left: auto!important;
                    right: 0!important;
                }

                /* hidden menus in post */
                .a11y__popup.Menu.MenuWrapperAnimation-enter-done .Menu__content.dropdown-menu{
                    left: 0px!important;
                    right: auto!important;
                }

                .post-menu__item.pull-right svg{
                    -webkit-transform: scaleX(-1);
                    -ms-transform: scaleX(-1);
                    transform: scaleX(-1);
                }

                .post-menu__comment-count {
                    margin-right: 2px;
                    margin-left: 0px;
                }

                /* نمایش فایل ها در زمان ارسال: آیکون به سمت چپ منتقل شد*/
                .post-image__column.file-preview {
                    flex-direction: row-reverse;
                }

                /* update your status in chats */
                .post__header-set-custom-status-text{
                    display:none;
                }

                .post.current--user.other--root .post__header-set-custom-status, .post.current--user.post--root .post__header-set-custom-status, .post.current--user.post--comment .post__header-set-custom-status{
                    margin-left:0px;
                    margin-right:8px;
                }

                .post__header-set-custom-status-icon svg{
                    margin-right:0px;
                    margin-left:0px;
                    margin-top: 2px;
                }

                .post .post__header .col__name{
                    margin-right: 0px;
                    margin-left: 7px;
                }

                /* chat parts */
                .post .post__body .all-emoji{
                    text-align:right;
                }

                .post .post__header{
                    padding-right:0px;
                }

                .post-message__text{
                    text-algin:right;
                }

                .post:hover .post__header {
                    padding: 0 0 0 55px;
                }

                /* آیکون استوس کاربر در جلو اسمش در پست ها */
                .post .emoticon{
                    margin-right: 5px;
                }


                .hint-toast .hint-toast__message {
                    padding-left: 0px;                
                    padding-right: 12px;
                }

                /* member list upper than chat part */

                .member-list__popover .more-modal__list .more-modal__details {
                    padding-left: 0;
                    padding-right: 16px;
                }

                /* account setting part */
                .modal .nav-pills>li button{
                    text-align:right;
                }

                .modal .nav-pills>li .icon {
                    margin-right: 0;
                    margin-left: 10px;
                }

                .section-min__title {
                    padding-right: 0;
                    padding-left: 50px;
                }

                #tabList{
                    padding:0px;
                }

                .header-dropdown__icon{
                    margin: 0 4px 0 4px;
                }


                
                .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12{
                    float:right;
                }

                /* modals */
                .modal .settings-modal .settings-table .security-links .fa {
                    margin-right: 0px;
                    margin-left: 6px;
                }

                .modal .modal-header .modal-title {
                    float: right;
                }

                .modal .modal-header .close, .modal .channel-switcher .modal-header .close{
                    right: auto;
                    left: 10px;
                }

                .modal .settings-modal .modal-back{
                    left:auto;
                    right: 0px;
                    transform: rotate(180deg);
                    top:3px;
                }

                /* دکمه بستن بالای اطلاعات کانال */
                .modal .about-modal .modal-content .modal-header .close{
                    left: 15px;
                    right: auto;
                }

                /* تنظیمات اعلان برای کانال، محل قرارگیری رادیوها */
                .radio label, .checkbox label{
                    padding-right: 20px;
                    padding-left: 0px;
                }

                /* دکمه بستن مودال مربوط به میانبرها */
                .modal .shortcuts-modal .shortcuts-content .modal-header .close{
                    left: 35px;
                    right: auto;
                }

                /* دکمه بستن بالای ایجاد دسته بندی جدید */
                .app__body .modal .GenericModal .modal-header .close{
                    left: 4px;
                    right: auto;
                }

                .modal .custom-textarea {
                    padding: 12px 15px 12px 30px;
                }

                .user-popover {
                    direction: ltr;
                }

                .more-modal__list .more-modal__details {
                    padding-left: 0;
                    padding-right: 10px;
                }

                /* بخش اضافه کردن مردم */
                .css-1pcexqc-container {
                    direction: ltr;
                }

                /* بخش یکپارچه سازی منو روی کار*/
                .backstage-sidebar{
                    left:0;
                }

                .backstage-sidebar__category .category-title__text {
                    right: 2.5em;
                    left:auto;
                }
                     
                .backstage-sidebar__category .section-title, .backstage-sidebar__category .subsection-title {
                    padding-right: auto;
                    padding-left: 2em;
                }

                /* در بخش ایجاد گروه فلش دکمه بعدی */
                .signup-team__container .btn .fa:last-child {
                    margin-right: 8px;
                    transform: rotate(-180deg) translateY(-2px);
                }

                /* سه نقطه روبه روی کانال ها بخش منو */
                #SidebarContainer .SidebarMenu .Menu .MenuItem span.icon{
                    padding-right: 0;
                    padding-left: 12px;
                }

                #SidebarContainer .SidebarMenu .styleSelectableItem .selected{
                    text-align: left;
                }

                #SidebarContainer .SidebarMenu .styleSelectableItem .SubMenu__icon-right {
                    transform: scaleX(-1);
                }

                #channelHeaderDropdownIconRight_sortChannels+.a11y__popup.Menu.dropdown-menu.SubMenu.styleSelectableItem{
                    left: auto!important;
                    right: 100%;
                }

                /* سه نقطه روبه روی کانال ها بخش منو ایجاد دسته بندی جدید*/
                .app__body .modal .GenericModal .modal-body .input-clear{
                    left: 36px;
                    right: auto;
                }

                /*//////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////*/



                #loginId, #loginPassword, #email, #name, #password, #passwordResetEmailInput{
                    direction: ltr;
                }

                #back_button_icon{
                    margin-right: 0;
                    margin-left: 4px;
                    -webkit-transform: scaleX(-1);
                    -ms-transform: scaleX(-1);
                    transform: scaleX(-1);
                }

                
                /*//////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                /// video part ///////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////*/
                .modal .modal-image .modal-image__content{
                    min-width:auto;
                    
                }

                .modal .modal-image .modal-image__wrapper audio, .modal .modal-image .modal-image__wrapper canvas, .modal .modal-image .modal-image__wrapper progress, .modal .modal-image .modal-image__wrapper video{
                    max-width:90%;
                }

                .modal .modal-image .modal-button-bar .modal-bar-file-count {
                    float: right;
                }

                .modal .modal-image .modal-button-bar .modal-bar-links {
                    float: left;
                }

                .post-image__column {
                    height: auto;
                    min-height: 6.4rem;
                }

                #navbar_wrapper .navbar-default .navbar-brand .dropdown, #navbar_wrapper .navbar-default .navbar-brand .MenuWrapper {
                    max-width: 100%;
                }

                /*//////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////
                /// زمانی که منو تیم وجود دارد /////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////*/
                @media screen and (min-width: 767px)
                {
                    .team-sidebar{
                        right: 0;
                        left: auto;
                    }
    
                    .multi-teams #SidebarContainer {
                        right: 65px;
                        left: auto;
                    }
    
                    .multi-teams #SidebarContainer+.inner-wrap #app-content {
                        margin-right: 305px;
                        margin-left: 0px;
                    }
                }
                

            `;


            var styleSheet = document.createElement("style");
            styleSheet.type = "text/css";
            styleSheet.innerText = styles;
            document.head.appendChild(styleSheet);

            /* تابع تبدیل تاریخ میلادی به شمسی */
            function gregorian_to_jalali(g_y, g_m, g_d) {
                var div = function div(a, b) { return parseInt((a / b)); };
                var g_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                var j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
                var jalali = [];
                var gy = g_y - 1600;
                var gm = g_m - 1;
                var gd = g_d - 1;
            
                var g_day_no = 365 * gy + div(gy + 3, 4) - div(gy + 99, 100) + div(gy + 399, 400);
            
                for (var i = 0; i < gm; ++i)
                    g_day_no += g_days_in_month[i];
                if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)))
                    /* leap and after Feb */
                    g_day_no++;
                g_day_no += gd;
            
                var j_day_no = g_day_no - 79;
            
                var j_np = div(j_day_no, 12053);
                /* 12053 = 365*33 + 32/4 */
                j_day_no = j_day_no % 12053;
            
                var jy = 979 + 33 * j_np + 4 * div(j_day_no, 1461);
                /* 1461 = 365*4 + 4/4 */
            
                j_day_no %= 1461;
            
                if (j_day_no >= 366) {
                    jy += div(j_day_no - 1, 365);
                    j_day_no = (j_day_no - 1) % 365;
                }
                for (var i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i)
                    j_day_no -= j_days_in_month[i];
                var jm = i + 1;
                var jd = j_day_no + 1;
                jalali[0] = jy;
                jalali[1] = jm;
                jalali[2] = jd;
                return jalali;
            }
            
            /* تابع جایگزینی تاریخ یا نام ماه یا ... در آیتم انتخابی */
            function repare_dates_item(item)
            {                
                if((typeof item == 'undefined') || (typeof item.nodeValue == 'undefined') || (item.elecserv_data_correction == item.nodeValue)) return;
                item.nodeValue = item.nodeValue
                .replace(/aprilie/i, "April")
                .replace(/august/i, "August")
                .replace(/decembrie/i, "December")
                .replace(/februarie/i, "February")
                .replace(/ianuarie/i, "January")
                .replace(/iulie/i, "July")
                .replace(/iunie/i, "June")
                .replace(/march/i, "Martie")
                .replace(/mai/i, "May")
                .replace(/noiembrie/i, "November")
                .replace(/octombrie/i, "October")
                .replace(/septembrie/i, "September")

                .replace(/luni/i, "دوشنبه")
                .replace(/marţi/i, "سه شنبه")   
                .replace(/marți/i, "سه شنبه")   // کاراکترها با سه شنبه بالایی متفاوت است
                .replace(/miercuri/i, "چهارشنبه")
                .replace(/joi/i, "پنجشنبه")
                .replace(/vineri/i, "جمعه")
                .replace(/sîmbătă/i, "شنبه")
				.replace(/sâmbătă/i, "شنبه")
                .replace(/duminică/i, "یکشنبه")

                .replace(/Yesterday/i, "دیروز")
				.replace(/Today/i, "امروز");

                item.elecserv_data_correction = item.nodeValue.toString();
                if(item.parentElement && item.parentElement.setAttribute) 
                    item.parentElement.setAttribute('ignore_date_conv', 'true');
                
                var d =  item.nodeValue.trim().split(" ");
                var dtype = 0;
                if(d.length < 2) return;  // for day names

                switch(d.length)
                {
                    case 3:
                        dtype = 3;
                        d = d[0] + " " + d[1] + " " + d[2];
                        break; 
                    case 2:
                        dtype = 2;
                        d = d[1] + " " + d[0] + " " + (new Date()).getFullYear();
                        break;
                }
                    
                d = new Date(d); 
                d = new Date(d.toLocaleString("en-US", {timeZone: "Asia/Tehran"}));
                
                if(isNaN(d.getTime())) return;
                
                d = gregorian_to_jalali(d.getFullYear(), d.getMonth() + 1, d.getDate());
                if(isNaN(d[0]) || isNaN(d[1]) || isNaN(d[2])) return;
                var months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
                d.push(months[d[1] - 1]);   // d[3] is month name
                if(dtype == 2)
                    item.nodeValue = d[2] + ' ' + d[3];
                else
                    item.nodeValue = d[2] + ' ' + d[3] + ' ' + d[0];
                
                item.elecserv_data_correction = item.nodeValue;                 
            }

            /* تابع یافتن المان های دارای تاریخ یا اسم روز در صفحه */
            function repare_dates() {
                if(repare_dates.imrun) return;
                repare_dates.imrun = true;

                // انتخاب بخش هایی که تاریخ دارند
                var allDates = document.querySelectorAll(
                    '.BasicSeparator .separator__text:not([ignore_date_conv]), .BasicSeparator  .separator__text>span:not([ignore_date_conv]), ' + // بخش چت
                    '.post-list__timestamp time, .post-list__timestamp time span,' + // قسمت متحرک در چت
                    '#passwordEdit span>span:first-child:not([ignore_date_conv]), .activity-log__table .report__info span>span:first-child:not([ignore_date_conv]),' + // تنظیمات امنیتی
                    'tbody[data-testid="auditTableBody"] td:first-child>div>div:first-child>span:not([ignore_date_conv])' + // جدول زمان های لاگین
                    '');
                for(var i = 0; i < allDates.length; i++) repare_dates_item(allDates[i].firstChild);
                

                var times = document.querySelectorAll('.post__time[datetime]:not([ignore_date_conv]), #passwordEdit span>span:last-child:not([ignore_date_conv])');                
                for(var i = 0; i < times.length; i++) {
                    times[i].innerHTML = times[i].innerHTML
                        .replace('a.m.', 'ق.ظ.')
                        .replace('p.m.', 'ب.ظ.');
                    times[i].setAttribute('ignore_date_conv', 'true');
                }

                repare_dates.imrun = false;
            }
            
            setInterval(function(){                
                var PostListDiv = document.getElementsByClassName('post-list__dynamic')[0];

                if(PostListDiv)
                {
                    if(!PostListDiv.elecserv_repare_date) {
                        PostListDiv.elecserv_repare_date = true;
                        PostListDiv.addEventListener("scroll", repare_dates);                    
                    }
                    repare_dates();
                }
            }, 10);

            document.body.addEventListener("click", repare_dates);
/*
            window.elecserv_history = [];
            window.elecserv_close_alert_timer = false;
            if(!window.elecserv_close_alert) window.elecserv_close_alert = document.createElement('div');
            window.elecserv_close_alert.innerText = 'برای خروج یک بار دیگر دکمه Back را بزنید.';
            window.elecserv_close_alert.style.cssText = 'position:fixed;top:auto;bottom: 100px; left:50%;width:270px;margin-left:-135px;background:#000; color:#fff; border-radius:5px;padding:10px 0px;z-index:200000;text-align:center;transition:all 0.7s; opacity: 0;visibility:hidden';
            document.body.append(window.elecserv_close_alert);
            window.addEventListener('popstate', function (event) { 
                if(window.elecserv_history.indexOf(window.history.state.key) < 0)
                {
                    window.elecserv_history.push(window.history.state.key);
                    return;
                }                    

                window.elecserv_close_alert.style.opacity = '1';
                window.elecserv_close_alert.style.visibility = 'visible';
                if(window.elecserv_close_alert_timer)
                {
                    open(location, '_self').close();
                    window.close();
                    return;
                }

                window.elecserv_close_alert_timer = setTimeout(function(){
                    window.elecserv_close_alert.style.opacity = '0';
                    window.elecserv_close_alert.style.visibility = 'hidden';
                    window.elecserv_close_alert_timer = false;
                }, 2000);
                
              });*/
        }




        uninitialize() {
            //alert("unin")
        }
    })

})();