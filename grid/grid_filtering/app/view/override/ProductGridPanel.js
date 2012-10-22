Ext.define('Sencha.view.override.ProductGridPanel', {
    override: 'Sencha.view.ProductGridPanel',
    
    features: [
        {
            ftype: 'filters',
            // encode and local configuration options defined previously for easier reuse
            encode: false, // json encode the filter query
            local: true,   // defaults to false (remote filtering)
        
            // Filters are most naturally placed in the column definition, but can also be
            // added here.
            filters: [
                {
                    type: 'boolean',
                    dataIndex: 'visible'
                }
            ]
        }
    ],
    
    initComponent: function(){              
        this.callOverridden(arguments);
    }
});