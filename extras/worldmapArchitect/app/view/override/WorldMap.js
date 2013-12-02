Ext.define('MyApp.view.override.WorldMap', {
    override: 'MyApp.view.WorldMap',
    
    gradients :[{
        id: 'gradientId',
        angle: 45,
        stops: {
            0: {
                color: '#fdf0be'
            },
            1: {
                color: '#f9da5c'
            }
        }
    }],
    
    initComponent: function() {
        var me = this;
        var items = [];
    
        for (var country in worldmap.shapes) {
            Ext.Array.push(items,{
                type: 'path',
                stroke: '#fef7de',
                fill: 'url(#gradientId)',
                'stroke-opacity': 0.25,
                path: worldmap.shapes[country],
                itemId: country
            });
        }
    
        Ext.apply(me,{
            items:items
        });
        
        me.callOverridden(arguments);
    }
        
});