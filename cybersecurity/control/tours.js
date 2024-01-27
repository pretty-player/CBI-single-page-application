  id_array=["Home","About","Signup","Login" ,"windowstour","linuxtour","computertour","hardwaretour","programmingtour","networkingtour","motivationaltour" ];
  document.getElementById('Home').style.display="block";
  document.getElementsByClassName("left-side-window")[0].style.display="block";
  
  /*  Menu open and close customize start */
  
  function left_side_close(){
    document.getElementsByClassName("left-side-window")[0].style.display="none";	
	active_element=id_array.map(find_active_window);
	active_element=String(active_element).replaceAll(/undefined/g,"");
	active_element=active_element.replaceAll(/,/g,"");
	
	function find_active_window(ids){
		if(document.getElementById(ids).style.display === "block"){
			return ids;
		}
	}
	document.getElementById(active_element).className="col-12 common-right-side-window";
	
	document.getElementsByClassName("open-symbol")[id_array.indexOf(active_element)].style.display="block";
 }
 
 function left_side_open(obj){
	//alert(obj.parentElement.parentElement.id);
	document.getElementsByClassName("left-side-window")[0].style.display="block";
	document.getElementById(obj.parentElement.id).className="col-10 common-right-side-window";
	document.getElementsByClassName("open-symbol")[id_array.indexOf(obj.parentElement.id)].style.display="none";
 }
  /* Menu open and close customize end*/
 
 
 function page_changer_btn(obj){
	 
	 
	 const compare_value=obj.getAttribute("href").slice(1);
	 var flag=0;
	 while(flag<=id_array.length-1){
		 if(compare_value === id_array[flag]){
			 document.getElementById(id_array[flag]).style.display="block";
			 flag+=1;
		 }else{
			 document.getElementById(id_array[flag]).style.display="none";
			 flag+=1;
		 }
		 
	 }
	 
	 if(obj.textContent === "Home" || "About" || "Signup" || "Login" ){
		 if(document.getElementsByClassName("left-side-window")[0].style.display==="block"){
			document.getElementById(obj.textContent).className="col-10 common-right-side-window";
			var a=0;
			while(a<=3){
				document.getElementsByClassName("open-symbol")[a].style.display="none";
				a+=1;
			}
		 }else{
			 document.getElementById(obj.textContent).className="col-12 common-right-side-window";
			 a=0;
			 while(a<=3){
                document.getElementsByClassName("open-symbol")[a].style.display="block";
                a+=1;				
			 }
		 }
	 }	 
 }
