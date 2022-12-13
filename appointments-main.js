window.onload = function() {
    document.getElementsByClassName('modal').className = 'expand';
};

$(function()
{
    setTimeout(function(){   
        var ac = $('#calendar-4').find('.calendar-tools').find('div')[1];
        var s = $(ac).find('.btn-outline-primary')[0];
        if($($(ac).find('.btn-outline-primary')[2]).css('background-color') == 'rgba(0, 0, 0, 0)' &&
        $($(ac).find('.btn-outline-primary')[2]).css('background-color') == 'rgba(0, 0, 0, 0)' &&
        $($(ac).find('.btn-outline-primary')[2]).css('background-color') == 'rgba(0, 0, 0, 0)'){
            $(s).addClass('activeControle');
            $(s).css('background-color','#fff');
            $(s).css('border-color','#fff');
            $(s).css('color','#593eff');
        }
      
        $(ac).find('.btn-outline-primary').on('click',function(){
            $(ac).find('.btn-outline-primary').css('background-color','transparent');
            $(ac).find('.btn-outline-primary').css('border-color','transparent');
            $(ac).find('.btn-outline-primary').css('color','#292f4c');
            $(this).css('background-color','#fff');
            $(this).css('border-color','#fff');
            $(this).css('color','#593eff');
            $(ac).find('.btn-outline-primary').removeClass('activeControle');
            $(this).addClass('activeControle');
        });     
    },1000);
    
    // Add content for mobile sidebar 
    $("<a href='javascript:;' class='c-mobile-menu'><i class='fa fa-bars'></i></a>").insertAfter("#calendar-4 .calendar-tools .calendar-heading");
    setInterval(() => {
        $(".c-mobile-menu").on('click', function(){
            $('.dashboard-calendar').addClass("c-mobile-menu-active");
        });
        $(".calendar-profile").on('click', function(){
            $('.dashboard-calendar').removeClass("c-mobile-menu-active");
        });
    }, 500);

   // Add content for mobile sidebar end
    // document.getElementsByClassName("modal").className = "small-model";
   // $('.modal:not(.reminders-modal)').addClass('small-model');
    $('#successMessage').delay(3000).fadeOut('slow');
    //small-model
    //$(".small-model:not(.appointmentSummeryModal").attr("id","automateApplicationNew"); 
    //$("#newAppointment").parent().attr("id","automateApplicationNew"); 
    $(".chkAll").click(function ()
    {
        if ($(this).is(":checked"))
            $(".chk").prop("checked", true);
        else
            $(".chk").prop("checked", false);
    });

    $(".chk").click(function ()
    {
        if (!$(this).is(":checked"))
            $(".chkAll").prop("checked", false);

        if ($('.chk:checked').length == $('.chk').length)
        {
            $(".chkAll")[0].checked = true; //change "select all" checked status to true
        }
    });

    $("#sidebarOpenClose").click(function()
    {
        $.ajax({
            url: 'ajax.php?action=expend',
            type: 'json',
            data: { "pk" : "1" },
            type:'post',
            success: function(response, newValue)
            {

            }
        });
    });


    var frm = $('#myForm');
    frm.submit(function (e) {
        var that = this;
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            type: frm.attr('method'),
            url: 'ajax.php?action=feedback',
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            data: formData,
            success: function (data) {
                that.reset();
                $('#msg').html("Feedback successfully Added").fadeIn('slow') //also show a success message
                $('#msg').delay(5000).fadeOut('slow');
            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            },
        });
    });

});

function validateURL(textval)
{
    var urlregex = new RegExp( "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    return urlregex.test(textval);
}

$(document).ready(function()
{

    $("#btnRemove").click(function()
    {
        var result = confirm("Are you sure want to delete the record");

        if(result === true)
        {
            $("#myPost").attr("method", "post");
            $("#myPost").submit();
        }
    });

    $(".removeOne").click(function()
    {
        var result = confirm("Are you sure want to delete the record");

        if(result == true)
            return true;

        return false;
    });

    $("#limit").change(function()
    {
        $("#page").val("1");
        this.form.submit();
    });

    $("#lang").change(function()
    {
        $("#page").val("1");
        this.form.submit();
    });

    $(".colFilter").click(function()
    {
        var orderKey = $(this).attr("data-filter");
        var orderValue = $(this).attr("data-order");
        $("#page").val("1");
        $("#orderByKey").val(orderKey);
        $("#orderByValue").val(orderValue.trim());
        $("#myPost").submit();
    });

    $("#fCompanyID").change(function()
    {
        $("#myPost").submit();
    });
    $("#orderByKey").change(function()
    {
        $("#myPost").submit();
    });
    $("#orderByValue").change(function()
    {
        $("#myPost").submit();
    });

});

setTimeout(() => {
    document.querySelectorAll('.truck-button').forEach(button => {
        alert('hi');

    });
}, 1000);



$(document).ready(function(){
    $("#openToggle").on('click', function(){
        $('body').toggleClass("open-slide");
        $(this).next().addClass("animate-Leftside");
        setTimeout(() => {
            $(this).next().removeClass("animate-Leftside");
            $(this).next().addClass("animate-visible");
        }, 900);
    });
    $(".left-sidebar ul li .action--open").on('click', function(){
        if ($(".menu__level.first-tab").hasClass("menu__level--current")) {
        }
        $(this).addClass("open-side");


        if ( $( ".second__tab" ).hasClass( "menu__level--current" ) ) {
            $(".first-tab").hide();
            $(".second__tab.menu__level--current").addClass("second_open");
        } else {
            $(".first-tab").addClass("animate-Leftside");
        }

        setTimeout(() => {


            if ( $( ".second__tab" ).hasClass( "menu__level--current" ) ) {
                $(".first-tab").show();
                $(".second__tab.menu__level--current").removeClass("second_open");
                $(".second__tab.menu__level--current").addClass("2ndanimate_visible");
            } else {
                $(".first-tab").removeClass("animate-Leftside");
                $(".first-tab").addClass("animate-visible");
            }
        }, 900);
    });
    $(".action--close").on('click', function(){
        $(".left-sidebar ul li .action--open").removeClass("open-side");
        if ( $( ".second__tab" ).hasClass( "menu__level--current" ) ) {
            $(".first-tab").hide();
            $(".second__tab.menu__level--current").addClass("second_close");
        } else {
            $(".first-tab.menu__level--current").addClass("animate-Rightside");
        }

        setTimeout(() => {

            if ( $( ".second__tab" ).hasClass( "menu__level--current" ) ) {
                $(".first-tab").show();
                $(".first-tab").removeClass("animate-Rightside");
                $(".first-tab").addClass("animate-visible");

                $(".second__tab").removeClass("second_close");
                $(".second__tab").addClass("2ndanimate_visible");
            } else {
                $(".first-tab").removeClass("animate-Rightside");
                $(".first-tab").addClass("animate-visible");
            }
        }, 900);
        body.classList.remove("open-second-level");
    });

    $("aside nav button").on('click', function(){
        $(this).toggleClass('open');
        $(this).siblings().removeClass('open');
    });
    $(window).click(function() {
        $("aside nav button").removeClass('open');
    });
    $('aside nav button').click(function(event){
        event.stopPropagation();
    });
    $('aside nav button .drop-down').click(function(event){
        event.stopPropagation();
    });
    /* Profile Dropdown*/
    $(".side-profile").on('click', function(){
        //$(this).toggleClass('open');
        $("#nofityBar").removeClass('open');
    });
    $(window).click(function() {
        $(".side-profile").removeClass('open');
    });
    $('.side-profile').click(function(event){
        event.stopPropagation();
    });
    $('.drop-down.profile').click(function(event){
        event.stopPropagation();
    });

    $("#nofityBar").on('click', function(){
        //$(this).toggleClass('open');
        $(".side-profile").removeClass('open');
    });
    $(window).click(function() {
        $("#nofityBar").removeClass('open');
    });
    $('#nofityBar').click(function(event){
        event.stopPropagation();
    });
    $('.drop-down.notify').click(function(event){
        event.stopPropagation();
    });

    $("#f-form").on('click', function(){
        $(this).toggleClass('open');
        $(".side-profile").removeClass('open');
        $("#nofityBar").removeClass('open');
    });
    $(window).click(function() {
        $("#f-form").removeClass('open');
    });
    $('.feedback-form .close-icon').click(function(event){
        $("#f-form").removeClass('open');
    });
    $('#f-form').click(function(event){
        event.stopPropagation();
    });
    $('.drop-down.notify').click(function(event){
        event.stopPropagation();
    });


    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
    $("#dropdown-action").on('click', function(){
        $(".action-bar").toggleClass('open');
    });
    $(window).click(function() {
        $("#dropdown-action").removeClass('open');
    });
    $('#dropdown-action').click(function(event){
        event.stopPropagation();
    });
    $('.drop-down.notify').click(function(event){
        event.stopPropagation();
    });
    $("#dropdown-action").hover(
        function () {
            $(this).parent().parent().parent().addClass("result_hover");
        },
        function () {
            $(this).parent().parent().parent().removeClass("result_hover");
        }
    );
});

$(window).load(function(){
    $(".scroll-list").mCustomScrollbar({
        scrollButtons:{enable:false},
    });
    $(".menu__wrap .first-tab .inner-scroll").mCustomScrollbar({
        scrollButtons:{enable:false},
    });
    $(".drop-down.notify .tab-content").mCustomScrollbar({
        scrollButtons:{enable:false},
    });
});

$(document).ready(function () {
    // funSelectScroll();
    $('.cmn-select select').on('select2:open', function () {
        funSelectScroll();
    });
    $(document).on('keydown', '.select2-search__field', function () {
        funSelectScroll();
    });
    $(".usernote").click(function () {
        $(".usernt").slideToggle();
    });


});
$("#btnBackAppointment").on("click",function(){
    $(".modal-backdrop")[1].remove();
})

$("#btnBackFollowupAppointment").on("click",function(){
    $(".modal-backdrop")[1].remove();
})

$(".modal-backdrop")
var check=false;
var type="unchecked";
//var appointment = getAppointment();
var timezonecrone = Intl.DateTimeFormat().resolvedOptions().timeZone;
var hideSidebar="";
// console.log(sms);
var add_to_blog="unchecked";
var send_testimonial="unchecked";
var send_current_market_listing="unchecked";
var send_a_followup_on_client_current_search_status="unchecked";
var all_day_event = "unchecked";
var a_day_before="unchecked";
var in_the_morning_on_the_day_of_appointment="unchecked";
var an_hour_before="unchecked";
var custom_time="unchecked";
var email_confirmations = "unchecked";
var email_cancellations = "unchecked";
var email_reminder = "unchecked";
var text_reminder = "unchecked";
var text_followup = "unchecked";
var email_followup = "unchecked";
var user_type = "";
var potential_user = "";
var email_reminder_time = "";
var email_followup_time = "";
var date_15 = "";
var date_30 = "";
var date_45 = "";
var date_60 = "";
var date_custom = "";
var dateCustomEndTime = "";
var end_date_style = "display:none";
var autocomplete_init = false;
var potential_title = "Add Potential User";
var user_title = "Add User";
var emailOption;
var emailOptionFollowup;
//creating an instance of appointment calendar
// const calendarElement = document.getElementById('calendar-4');
// const calendarInstance = Calendar.getInstance(calendarElement);
// calendarInstance.addEvents(appointment);
const calendarElement = document.getElementById('calendar-4');
calendarElement.classList.add('calendar');
var calendarInstance = new Calendar(calendarElement,{
    defaultView: 'month',
    //disablePast: false
    // weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fi', 'S'],
});
//calendarInstance.addEvents(appointment);

function fnStoreEvent(arr) {
    var list = $("input[name='checkFollowUp[]']:checked").map(function () {
        return this.value;
    }).get();
}
$(document).ready(function(){
    
    $(".small-model:not(.reminders-modal)").on('show.bs.modal', function () {
        
        document.querySelectorAll('.form-outlineInitSelect').forEach((formOutlineSelect) => {
            mdb.Select.getOrCreateInstance(formOutlineSelect);
        });
        const myDateStartpicker = document.querySelector('.datepickerStartadd');
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        if(myDateStartpicker){
            myDateStartpicker.addEventListener("dateChange.mdb.datepicker",(e) => {
                var startDateValue = $("input[name='startDate']").val(); 
                var startDate = startDateValue.split("/");
                var f = new Date(startDate[2], startDate[1] - 1, startDate[0])
                var finalDate = weekday[f.getDay()]+", "+f.toLocaleString('en-us', { month: 'long' })+ " "+ f.getDate();
                $("input[name='startDate']").val(finalDate);
                $("#startDateFinal").val(startDateValue);
            })
        }
        
        const datepickerStartaddall = document.querySelector('.datepickerStartaddall');
        if(datepickerStartaddall){
            datepickerStartaddall.addEventListener("dateChange.mdb.datepicker",(e) => {
                var startDateValue = $("input[name='start.date']").val(); 
                var startDate = startDateValue.split("/");
                var f = new Date(startDate[2], startDate[1] - 1, startDate[0])
                var finalDate = weekday[f.getDay()]+", "+f.toLocaleString('en-us', { month: 'long' })+ " "+ f.getDate();
                $("input[name='start.date']").val(finalDate);
                $("#startDateFinal").val(startDateValue);
            })
        }

        const datepickerEndadd = document.querySelector('.datepickerEndadd');
        if(datepickerEndadd){
            datepickerEndadd.addEventListener("dateChange.mdb.datepicker",(e) => {
                var endDateValue = $("input[name='end.date']").val(); 
                var endDate = endDateValue.split("/");
                var fEnd = new Date(endDate[2], endDate[1] - 1, endDate[0])
                var finalDate = weekday[fEnd.getDay()]+", "+fEnd.toLocaleString('en-us', { month: 'long' })+ " "+ fEnd.getDate();
                $("input[name='end.date']").val(finalDate);
                $("#endDateFinal").val(endDateValue);
            })
        }

        const datepickerEndaddCustom = document.querySelector('.datepickerEndaddCustom');
        if(datepickerEndaddCustom){
            datepickerEndaddCustom.addEventListener("dateChange.mdb.datepicker",(e) => {
                var endDateValue = $("input[name='end.datecustom']").val(); 
                var endDate = endDateValue.split("/");
                var fEnd = new Date(endDate[2], endDate[1] - 1, endDate[0])
                var finalDate = weekday[fEnd.getDay()]+", "+fEnd.toLocaleString('en-us', { month: 'long' })+ " "+ fEnd.getDate();
                $("input[name='end.datecustom']").val(finalDate);
                $("#endDateFinal").val(endDateValue);
            })
        }
        const myTimepicker = document.querySelector('.timepickerstartadd');
        if(myTimepicker){
            myTimepicker.addEventListener("input.mdb.timepicker",(e) => {
                var startTime = $("input[name='startTime']").val();
                var startDate = $("input[name='startDate']").val();
                var customdate  = $('#customDate').val();
                //$("#dvCustomDate").fadeIn('slow');
                $('#dvCustomDate').css({opacity: 0}).slideDown("slow").animate({opacity: 1});
                if(customdate != ''){
                    var dt = moment(startTime, ["h:mm A"]).format("HH:mm");
                    var finalTime = moment.utc(dt,'HH:mm').add(customdate,'minute').format('h:mm A');
                    var startDate = $("input[name='startDate']").val();
                    var startDateFormat = moment(startDate, ["DD-MM-YYYY"]).format("MM/DD/YYYY");
                    $("#endTimeWithoutCustom").val(startDateFormat + " " + finalTime);
                    $("#endTimeWithoutCustom").addClass("active");
                    $("#endTimeWithoutCustom").attr("readOnly",true);
                    //var myTimepicker = new mdb.Timepicker(document.querySelector('#endTimeWithoutCustom'),{ format24:true, readOnly: true ,defaultTime : finalTime});
                }
            })
        }
        

        const selectEl = document.getElementById('customDate');
        if(selectEl){
            mdb.Select.getOrCreateInstance(selectEl);
        }
        
        const mySelect03 = document.getElementById('customDate')
        if(mySelect03){
            mySelect03.addEventListener('valueChange.mdb.select', (e) => {
                $("#lblCustomDate").html("");
                var startTime = $("input[name='startTime']").val();
                if (e.value == "custom") {
                    $("#endDate").show();
                    $("#dvWithoutCustom").hide();
                    $("#endTimeWithoutCustom").val("");
                    $("#endTimeWithoutCustom").removeClass("active");
                    $("#endTimeWithoutCustom").attr("readOnly",false);
                } else {
                    $("#endDate").hide();
                    $("#dvWithoutCustom").show();
                    var dt = moment(startTime, ["h:mm A"]).format("HH:mm");
                    var finalTime = moment.utc(dt,'HH:mm').add(e.value,'minute').format('h:mm A');
                    var startDate = $("input[name='startDate']").val();
                    var startDateFormat = moment(startDate, ["DD-MM-YYYY"]).format("MM/DD/YYYY");
                    $("#endTimeWithoutCustom").val(startDateFormat + " " + finalTime);
                    $("#endTimeWithoutCustom").addClass("active");
                    $("#endTimeWithoutCustom").attr("readOnly",true);
                    //var myTimepicker = new mdb.Timepicker(document.querySelector('#endTimeWithoutCustom'),{ format24:true ,defaultTime : finalTime});
                }
                document.querySelectorAll('.form-outlineInit').forEach((formOutline) => {
                    new mdb.Input(formOutline).init();
                });
            })
        }

        $(".small-model .btn-option").on("click", function(){
            $(this).closest(".modal").removeClass("small-model");
            $(this).closest(".modal").addClass("sidebar-modal");
            $(".sidebar-modal").on('hide.mdb.modal', function () {
                    setTimeout(() => {
                    $(this).closest(".modal").addClass("small-model");
                    $(this).closest(".modal").removeClass("sidebar-modal");        
                    $('.modal .modal-dialog .modal-content').mCustomScrollbar('destroy');

                    $(".small-model .btn-option").on("click", function(){
                        $(this).closest(".modal").removeClass("small-model");
                        $(this).closest(".modal").addClass("sidebar-modal");      
                    });
                    
                }, 1000);
                });        
        });
        // New form end
        const options = {
        datepicker: { format: 'dd-mm-yyyy' }
        }

        $("#service_id").on('change', function (e) {
            var getSS = $('#service_id').find(':selected').val();
            var name = $('#service_id').find(':selected').attr('data-name');
            if (getSS == "add-service") {
                $('.editservc').css({opacity: 0}).slideDown("slow").animate({opacity: 1});
            } else {
                $('.editservc').animate({opacity: 0}).slideUp("slow");
            }
            $("#dvTimeTitle").html('<img src="https://rosnyc.com/admin/images/icon-wall-clock.png"> '+name+' time');
            $("#dvTimeInformation").html('<img src="https://rosnyc.com/admin/images/icon-pop-up.png"> '+name+' information');
        });

        $("#formAddService").on("blur",function(){
            var appointment_type = $("#formAddService").val();
            $("#dvTimeTitle").html('<img src="https://rosnyc.com/admin/images/icon-wall-clock.png"> '+appointment_type+' time');
            $("#dvTimeInformation").html('<img src="https://rosnyc.com/admin/images/icon-pop-up.png"> '+appointment_type+' information');
        })

        $("#sel_01Edt").select2({
            dropdownParent: $('.selectIdOneE'),
            placeholder: "Select service",
            width: "100%"
        }).on('change', function (e) {
            var getSS = $('.sel_01Edt').find(':selected').val();
            if (getSS == "add-service") {
                $('.editservc').css({opacity: 0}).slideDown("slow").animate({opacity: 1});
            } else {
                $('.editservc').animate({opacity: 0}).slideUp("slow");
            }
        });

        $("#sel_02Edt").select2({
            dropdownParent: $('.selectIdTwoE'),
            placeholder: "Select client",
            width: "100%"
        }).on('change', function (e) {
            var getCC = $('.sel_02Edt').find(':selected').val();
            if (getCC == "add-client") {
                $('.editclnt').css({opacity: 0}).slideDown("slow").animate({opacity: 1});
            } else {
                $('.editclnt').animate({opacity: 0}).slideUp("slow");
            }
        });


        function funSelectScroll() {
            $('.select2-dropdown .select2-results__options').mCustomScrollbar('destroy');
            setTimeout(function () {
                $('.select2-dropdown .select2-results__options').mCustomScrollbar({
                    axis: 'y',
                    scrollbarPosition: 'inside',
                    advanced: {
                        updateOnContentResize: true,
                    },
                });
            }, 8);
        }

        $('.sidebar-modal.modal .modal-dialog .modal-content').mCustomScrollbar('destroy');

        setTimeout(function () {
            $('.sidebar-modal.modal .modal-dialog .modal-content').mCustomScrollbar({
                axis: 'y',
                scrollbarPosition: 'inside',
                advanced: {
                    updateOnContentResize: true,
                },
            });

        }, 200);
    });
    
});
$('a[href$="#Modal"]').on( "click", function() {
    $('#reminders-modal').modal('show');
});

function fnCloseModal(){
    setTimeout( () => {
        $("body").css("overflow","auto");
    }, 1000);
}