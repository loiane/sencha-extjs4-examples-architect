// custom Vtype for vtype:'uniqueUserName'
Ext.apply(Ext.form.field.VTypes, {
    uniqueUserName:  function(v) {
        Ext.Ajax.request({
			url: 'php/validate_username.php',
			method: 'POST',
			params: 'username=' + v,
			success: function(o) {
				if (o.responseText == 0) {
					setusernamevalidfalse(v);
				} 
			}
		});
		return true;
    },

    uniqueUserNameText: 'username already in use.'
});

function setusernamevalidfalse() {
	Ext.apply(Ext.form.field.VTypes, {
		uniqueUserName : function(val, field) {
			var username = val;//Ext.getCmp('regUsername').getValue();
			Ext.Ajax.request({
				url: 'php/validate_username.php',
				method: 'POST',
				params: 'username=' + username,
				success: function(o) {
					if (o.responseText == 0) {
						setusernamevalidfalse(val);
					} else {
						setusernamevalidtrue(val);
					}
				}
			});
			return false;
		}
	});
}

function setusernamevalidtrue() {
	Ext.apply(Ext.form.field.VTypes, {
		uniqueUserName : function(val, field) {
			var username = val;//Ext.getCmp('regUsername').getValue();
			Ext.Ajax.request({
				url: 'php/validate_username.php',
				method: 'POST',
				params: 'username=' + username,
				success: function(o) {
					if (o.responseText == 0) {
						setusernamevalidfalse(val);
					} else {
						setusernamevalidtrue(val);
					}
				}
			});
			return true;
		}
	});
}