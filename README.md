# Lightning Modal Component

<a href="https://githubsfdeploy.herokuapp.com?owner=Karanraj&repo=Lightning-Modal">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>

With the salesforce Winter’18 release displaying modal/popup dialogue box is made simple in the lightning components.This lightning modal component provides flexibility of customizing header, body and footer message

![alt tag](https://raw.github.com/Karanraj/Lightning-Modal/master/img/modal.gif)

You have to use the lightning:overlayLibrary in your lightning component and  in the client-side controller use component.find('modalLib').showCustomModal() to create and display the modal where modalLib matches the aura:id on the lightning:overlayLibrary instance

