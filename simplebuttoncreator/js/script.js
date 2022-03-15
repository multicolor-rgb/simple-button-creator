
var btncreator = document.createElement("li"); 
btncreator.id = "btn-btncreator";
btncreator.innerHTML = "<a href='#'>Add Button</a>";


document.querySelector("#edit #sidebar .snav").appendChild(btncreator);


document.querySelector('#btn-btncreator').addEventListener('click',clickBtnCreator);


var btnshadow = document.createElement('div');
btnshadow.id="shadowbody";
btnshadow.classList.add('hide-shadowbody');

document.querySelector('body').appendChild(btnshadow);

   
   
// window btn //


var btcreatorWindow = document.createElement('div');
btcreatorWindow.id = "btn-creator-window";
btcreatorWindow.classList.add('btn-creator-window-hide');
document.querySelector('#edit #sidebar .snav').appendChild(btcreatorWindow);
btcreatorWindow.innerHTML = '<button class="close-btn-window">X</button><form>'
+'<h3 style="grid-column:1/4; text-align:center;">Simple button creator</h3>'
+'<label class="label-name">button name</label><input class="name-btn-input" type="text"><br>'
+'<label class="label-link">link href</label><input class="link-btn-input" type="text"><br>'
+'<label>background button (hex)</label><input class="background-btn-input" type="text" ><br>'
+'<label>color button (hex) </label><input class="color-btn-input" type="text" ><br>'
+'<label>padding top/bottom (default px)</label><input class="padding-top-bottom-btn-input" type="text"><br>'
+'<label>padding left/right (default px)</label><input class="padding-left-right-btn-input" type="text"><br>'
+'<label>border radius ( default px)</label><input class="border-radius-input" type="text"><br>'


+'<input type="submit" class="addbtnmagicnow" value="Add Button"></form>';




function clickBtnCreator(){
   event.preventDefault();
btcreatorWindow.classList.toggle('btn-creator-window-hide');
shadowbody.classList.toggle('hide-shadowbody');
   
   }
   
   
   
 document.querySelector('.close-btn-window').addEventListener('click',function(){
	console.log('dupa');
	btcreatorWindow.classList.toggle('btn-creator-window-hide');
	shadowbody.classList.toggle('hide-shadowbody');

	 
 });


//

document.querySelector('.addbtnmagicnow').addEventListener('click',function(){
event.preventDefault();
var giveMeBackground = document.querySelector('.background-btn-input').value;
var giveMeColor = document.querySelector('.color-btn-input').value;
var paddingMebtn = document.querySelector('.padding-top-bottom-btn-input').value;
var paddingMebtn2 = document.querySelector('.padding-left-right-btn-input').value;
var borderRadius = document.querySelector('.border-radius-input').value;
var linkMebtn = document.querySelector('.link-btn-input').value;
var nameBtncrtr = document.querySelector('.name-btn-input').value;

CKEDITOR.instances['post-content'].insertHtml('<a href="'+linkMebtn
+'" style="margin:5px 0;text-decoration:none;background:'+giveMeBackground+';border:solid 1px'+ giveMeBackground +';color:'+giveMeColor+
';padding:'+paddingMebtn2+'px '+paddingMebtn+'px;border-radius:'+borderRadius+'px">'+nameBtncrtr+'</a>');
	
btcreatorWindow.classList.toggle('btn-creator-window-hide');
shadowbody.classList.toggle('hide-shadowbody');

});







