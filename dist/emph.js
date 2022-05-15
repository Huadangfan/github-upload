var v_note = document.getElementsByClassName('v-section')
	for(var i=0; i<v_note.length; i++){
		v_note[i].onmouseover = function(){
			v_note[i].style.background = "#9a0dfe";
		}
		v_note[i].onmouseout = function(){
			v_note[i].style.background = "#d9dded";
		}
	}

var ctitle = document.getElementById("calendar_title_h3");
var my_date = new Date();
var my_year = my_date.getFullYear();
var my_month = my_date.getMonth();
var my_day = my_date.getDate();
ctitle.innerHTML = my_date.toLocaleString('en', {month: 'long'}) + ' ' + my_year;
var month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
function dayStart(month, year) {
    var tmpDate = new Date(year, month, 1);
    return (tmpDate.getDay());
}
function isOlympic(my_year, my_month, month_olympic, month_normal){
    if((my_year%4==0||my_year%400==0)&&my_year%100!=0)
        return month_olympic[my_month];
    else{
        return month_normal[my_month];
    }
}
