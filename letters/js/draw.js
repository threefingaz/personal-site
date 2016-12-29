function chart(error, data) {

	if (error) return 'Нет информации для отрисовки';

	var SCALE = 1000;				//to divide
	var PERCENT_SCALE = 100;		//to multiple

	var offsets = [];									//object with all maling base numbers
	var offset = function() {							//calculate maximum maling base bar width
    	var max = 0;
    	var i;
    	for (i=0; i<offsets.length; i+=1) {
    		if (offsets[i] > max) max = offsets[i];
    	}
    	return (max / SCALE + 20) + 'px'  ;
    }

    d3.select('.center')					
        .append('div')
        .attr('class', 'chart')
        .selectAll('div.letter')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'letter');

    d3.selectAll('div.letter')
        .append('div')
        .attr('class', 'bar effect-bar-ctr')
        .style('height', function(d) {          			
            return +d.CTR * PERCENT_SCALE + 'px';
        });

    d3.selectAll('div.letter')
        .append('div')
        .attr('class', 'bar effect-bar-cr')
        .style('height', function(d) {
            return +d.CR * PERCENT_SCALE + 'px';
        });

    d3.selectAll('div.letter')
        .append('div')
        .attr('class', 'bar base-bar')
        .style('height', function(d) {			//seve this number in closure object
            offsets.push(d.base);
            return d.base / SCALE + 'px';			//draw the bar
        });

    d3.selectAll('.letter')    					//height of all letters = height of highest letter
        .style('height', offset);
    d3.select('.center')
        .append('div')
        .attr('class', 'legend left')
        .html('<span class="ctr">CTR</span> <span class="cr">CR</span>');
    d3.select('.center')
    	.append('div')
    	.attr('class', 'legend right')
    	.html('<span class="base">Получатели</span>');


    d3.selectAll('div.letter')
        .append('div')
        .attr('class', 'info')
        .html(function(d) {
            var percent = d3.format('.2f');
            var formatData = '<h3><span class="info-date">' 
            + d.date + '</span>' 
            + d.subject  + '</h3> <div class="row info-open">Количество получателей <span class="text-mid">'
            + d.base + '</div></div><div class="row info-conversion">CTR (перешли на 1pgb.ru) <span class="text-mid">' 
            + percent(d.CTR)+ '%<span class="second-text">'
            + d.conversion + '</span></span></div><div class="row info-demo">CR (оформили демо) <span class="text-mid">'
            + percent(d.CR) + '%<span class="second-text">'            
            + d.demo + '</span></span></span></div>';

            return formatData;
        });

    d3.select('.center')
        .append('div')
        .attr('class', 'info-box');

    var letters = document.querySelectorAll('.letter');
    var infoBox = document.querySelector('.info-box');
    var chart = document.querySelector('.chart');
    var i;

    function showInfo() {
        var item = this.querySelector('.info');
        infoBox.innerHTML = item.innerHTML;
    	infoBox.className = 'info-box show';
    };
    function clearInfo() {
    	//infoBox.innerHTML = '';
    	infoBox.className = 'info-box hide';
    }
              
    chart.addEventListener('mouseout', clearInfo, false);    
    for (i = 0; i < letters.length; i += 1) {
        letters[i].addEventListener('mouseover', showInfo, false);

        var thisBase = letters[i].querySelector('.base-bar');
    	var thisCtr = letters[i].querySelector('.effect-bar-ctr');

    	if (thisBase.offsetHeight > thisCtr.offsetHeight) {
    		thisBase.className = 'bar base-bar back';
    	}
    };

};

d3.json('./data/letters-demo.json', chart);
