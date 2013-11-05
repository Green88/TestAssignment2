function checkAnswers()
{
	var numOfCorrectAnswers = 0;
	var qs = null;
	for(var j = 1; j<=5; j++)
	{
		qs = document.getElementsByName("A" + j);
		var numberOfRB = qs.length;
		for(var i=0; i< numberOfRB; i++)
		{
			if(qs[i].checked)
			{
				if(qs[i].value == "correct")
				{
					numOfCorrectAnswers++;
					break;
				}
			}
		}
	}
	return numOfCorrectAnswers;
}

function showChart(correct, wrong)
{
	$(document).ready(function(){    
		var myChart = new Highcharts.Chart({
        chart: {
			renderTo: 'container',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Quiz results'
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Quiz Results',
            data: [
                ['Correct answers', correct],
                ['Wrong answers',   wrong]
            ]
        }]
    }); //chart
	}); //doc ready
}

function checkFilled()
{
	var qs = null;
	var numberOfCheked = 0;
	for(var j = 1; j<=5; j++)
	{
		qs = document.getElementsByName("A" + j);
		var numberOfRB = qs.length;
		for(var i=0; i< numberOfRB; i++)
		{
			if(qs[i].checked)
			{
				numberOfCheked++;
				break;
			}
		}
	}
	if(numberOfCheked!=5)
	{
		alert("You have missed some question(s), please check once more");
	}
	else
	{
		var correct = checkAnswers() * 100/5;
		var wrong = 100 - correct;
		showChart(correct, wrong);
	}
}