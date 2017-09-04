({
	handleShowModal: function(component, evt, helper) {
        var modalBody;
        $A.createComponent("c:ltngFlowComponent", {},
                           function(content, status) {
                               if (status === "SUCCESS") {
                                   modalBody = content;
                                   component.find('overlayLib').showCustomModal({
                                       header: "Example for Lightning Modal Component",
                                       body: modalBody, 
                                       showCloseButton: true
                                   })   
                               }
                           });
    }
})