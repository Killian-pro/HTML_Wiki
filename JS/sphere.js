
    	$( document ).ready( function() {

            var entries = [ 

                { image: './images/sql.png', width: '90', height: '90', url: './Pages/sql.html', target: '_top' },
                { image: './images/js.png', width: '50', height: '50', url: './Pages/js.html', target: '_top' },
                { image: './images/html.png', width: '50', height: '50', url: './Pages/html.html', target: '_top' },
                { image: './images/php.png', width: '80', height: '80', url: './Pages/php.html', target: '_top' },
                { image: './images/jv.png', width: '60', height: '60', url: './Pages/java.html', target: '_top' },
                { image: './images/python.png', width: '50', height: '50', url: './Pages/python.html', target: '_top' },
                { image: './images/soft.png', width: '80', height: '80', url: './Pages/soft.html', target: '_top' },
                { image: './images/c.png', width: '50', height: '50', url: './Pages/soft.html', target: '_top' },
            ];

            var settings = {

                entries: entries,
                width: screen.width,
                height: screen.height-250,
                radius: '55%',
                radiusMin: 75,
                bgDraw: false,
                bgColor: 'black',
                opacityOver: 1.00,
                opacityOut: 0.05,
                opacitySpeed: 4,
                fov: 800,
                speed: 1,
                fontFamily: 'Oswald, Arial, sans-serif',
                fontSize: '15',
                fontColor: '#fff',
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontStretch: 'normal',
                fontToUpperCase: true,
                tooltipFontFamily: 'Oswald, Arial, sans-serif',
                tooltipFontSize: '11',
                tooltipFontColor: '#fff',
                tooltipFontWeight: 'normal',
                tooltipFontStyle: 'normal',
                tooltipFontStretch: 'normal',
                tooltipFontToUpperCase: false,
                tooltipTextAnchor: 'middle',//left, right
                tooltipDiffX: 0,
                tooltipDiffY: 20    
            
            };

            var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
            //$( '#holder' ).svg3DTagCloud( settings );

		} );
        
