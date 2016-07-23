function Helper() {
}
Helper.prototype.getDate__getToday = function(date) {
var dates = date ? new Date(date) : new Date();
var valueDate = (new Date(dates.getFullYear(), dates.getMonth(), dates.getDate())).valueOf();
return valueDate;
};

Helper.prototype.getDate__getMonth = function (month, lang){
var monthObject = {
		ru: {
			1: 'Января',
			2: 'Февраля',
			3: 'Марта',
			4: 'Апреля',
			5: 'Мая',
			6: 'Июня',
			7: 'Июля',
			8: 'Августа',
			9: 'Сентября',
			10: 'Октября',
			11: 'Ноября',
			12: 'Декабря'
		},
		uk: {
			1: "Січня",
			2: "Лютого",
			3: "Березня",
			4: "Квітня",
			5: "Травня",
			6: "Червня",
			7: "Липня",
			8: "Серпня",
			9: "Вересня",
			10: "Жовтня",
			11: "Листопада",
			12: "Грудня"
		}
	}
for (var key in monthObject){
if (key == lang) {
	for (code in monthObject.ru){
		if (code == month) {return monthObject.ru[code];}
			}
	}
			else break;
	};
};

Helper.prototype.getDate = function(date, lang){
	var now = this.getDate__getToday(),//число
	newsDate = this.getDate__getToday(date);
	var monthNews = date.split(' ')[0].slice(6,7);
if (now == newsDate) {
			alert(date.split(' ')[0].slice(8,10) + " " + this.getDate__getMonth(monthNews, lang));
			} else 
			{ alert(date.split(' ')[1].slice(0,5));
		}
		};
		
Helper.prototype.getFrame = function(){
	
		var parentDiv = document.querySelector('.val-iframe-streams');
		var str = '<div class="val-outer-frame"><span class="val-ico-online"><i>Online</i></span><iframe width="100%" height="270px"></iframe></div>';
		parentDiv.insertAdjacentHTML('afterBegin' , str + str);
		frameNew();
		
		function frameNew()
		{
			var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
			var xhr = new XHR();
			xhr.withCredentials = true;
			xhr.open('GET', 'http://embed.bambuser.com/channel/svoboda.fm', true);
			xhr.onload = function() {
			 alert( this.responseText );
						}
			xhr.onerror = function() {
						  alert( 'Ошибка ' + this.status );
			}
			xhr.send();
				};
			}
	
