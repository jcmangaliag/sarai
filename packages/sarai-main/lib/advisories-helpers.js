Meteor.PlantingGuideGraph = {

  constructChart: (crop,new_data) => {
    console.log('Construct Rainfall Graph chart');
    var new_data, color, thresh, title, main_title;

if(crop == "Rice"){

color = "green";

thresh = 200;

title = "30-day Cumulative Rainfall";

main_title = "30-day moving cumulative total rainfall in Echague, Isabela"

} else if(crop == "Corn"){
color = "orange";

thresh = 100;

title = "20-day Cumulative Rainfall";

main_title = "20-day moving cumulative total rainfall in Echague, Isabela"

}

    return {
            chart: {
                height: (9 / 16 * 100) + '%'
            },
            title: {
            text: ''
        },
        subtitle: {
            text: main_title
        },
        xAxis: {
                title: {
                text: 'Month'
            },
            type: 'datetime' 
        },
        yAxis: {
            title: {
                text: 'Rainfall (mm)'
            },
            plotLines: [{
            color: 'black',
            width: 2,
            value: thresh,
            label: {
                align: 'right',
                style: {
                    fontStyle: 'italic'
                },
                text: 'Threshold',
                x: -10
            },
            zIndex: 4
        }]
        },
        plotOptions: {
            line: {
                enableMouseTracking: true
            }
        },

            series: [
            {
                name: title,
                type: 'line',
                data: new_data,
                zoneAxis: 'x',
                zones: [{
                value: 1554076800000, 
                dashStyle: 'dot',
                color: 'black'
                },{
                value: 1569888000000, 
                dashStyle: 'solid',
                color: color
                },{
                value: 1585612800000, 
                dashStyle: 'dot',
                color: 'black'
                }]
            }]
        }
}

}