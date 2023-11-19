var inputOneIsOn = false; 
var inputTwoIsOn = false;


function toggleImage() {
   var img1 = "https://github.com/davinw06/FoC/blob/950f6d40149c945bad8d7fbdd5cd2881ea753d31/switch-on-xxl.png";
   var img2 = "https://github.com/davinw06/FoC/blob/3862f0fef947e3382684be0f2cddfb4c2162ba34/switch-off-xxl.png";
  
   
   var imgElement = document.getElementById('toggleImage');


   imgElement.src = (imgElement.src === img1)? img2 : img1;
   
   
}

  
function toggleImage2() {
   var img1 = "https://github.com/davinw06/FoC/blob/950f6d40149c945bad8d7fbdd5cd2881ea753d31/switch-on-xxl.png";
   var img2 = "https://github.com/davinw06/FoC/blob/3862f0fef947e3382684be0f2cddfb4c2162ba34/switch-off-xxl.png";
  
   
   var imgElement = document.getElementById('toggleImage2');


   imgElement.src = (imgElement.src === img1)? img2 : img1;
   
   
}

    function toggleInputOne() { 
            inputOneIsOn = !inputOneIsOn; 
            
        } 

    function toggleInputTwo() { 
            inputTwoIsOn = !inputTwoIsOn; 
              
           
        } 



function and(){
    var a = inputOneIsOn;
    var b = inputTwoIsOn;
    
	  
            console.log('Input one is on: ', 
                                inputOneIsOn); 
								
	        console.log('Input two is on: ', 
                                inputTwoIsOn); 
	
    
    if(inputOneIsOn&&inputTwoIsOn)
        document.getElementById('andGate').src='and2on.png';
    else if (!inputOneIsOn && inputTwoIsOn) 
        document.getElementById('andGate').src='andoffon.PNG';
	else if (inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='andonoff.PNG';
	else if (!inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='and2off.PNG';
	}

function not(){
    var c = inputOneIsOn;
    
	  
            console.log('Input one is on: ', 
                                inputOneIsOn); 
	
    
    if(inputOneIsOn)
        document.getElementById('notGate').src='noton.png';
    else if (!inputOneIsOn) 
        document.getElementById('notGate').src='notoff.PNG';
	}
	
function or(){
    var a = inputOneIsOn;
    var b = inputTwoIsOn;
    
	  
            console.log('Input one is on: ', 
                                inputOneIsOn); 
								
	        console.log('Input two is on: ', 
                                inputTwoIsOn); 
	
    
    if(inputOneIsOn&&inputTwoIsOn)
        document.getElementById('orGate').src='or2on.png';
    else if (!inputOneIsOn && inputTwoIsOn) 
        document.getElementById('orGate').src='oroffon.png';
	else if (inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('orGate').src='oronoff.png';
	else if (!inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('orGate').src='or2off.png';
	}
