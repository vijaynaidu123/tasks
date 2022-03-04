frappe.ui.form.on('Item', {
	refresh: function(frm) {
	
		console.log("text")
		// your code here
	
	frm.add_custom_button(__('codes'), function(){
		    
	
	frappe.call({
         // type:'POST',
         method:"kt.kt.doctype.item.item.generate_barcode",
          args:{
              'item_code' : frm.doc.item_code
          },
              async:false,
              
              callback:function(r){
              	frm.reload_doc()
                  console.log(r);
              }
      })
	})
  
	}
})
