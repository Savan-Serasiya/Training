var studentName = document.forms['formStudent']['studentName'];
var mathsMarks = document.forms['formStudent']['mathsMarks'];
var englishMarks = document.forms['formStudent']['englishMarks'];
var passingYear = document.forms['formStudent']['passingYear'];
var tableBody = document.getElementById('tbody');
var studentDetails = [];

var Student = function(studentName,mathsMarks,englishMarks,average,passingYear,createdDate){
    this.studentName = studentName;
    this.mathsMarks = mathsMarks;
    this.englishMarks = englishMarks;
    this.average = average;
    this.passingYear = passingYear;
    this.createdDate = createdDate;
}

/* if(JSON.parse(localStorage.getItem('Student'))==''){
    console.log('heweew...');
    
}else{
    console.log('here....');
    
    studentDetails = JSON.parse(localStorage.getItem('Student'));   
}
 */
document.forms['formStudent']['submitButton'].addEventListener('click',function(){
    if(studentName.value === ''){
        alert('Invalid Student Name');
        studentName.focus();
    }else if(parseInt(mathsMarks.value)<0 || parseInt(mathsMarks.value)>100  || mathsMarks.value === ''){
        alert('Invalid maths Marks');
        mathsMarks.focus();
    }else if(parseInt(englishMarks.value)<0 || parseInt(englishMarks.value)>100  || englishMarks.value === ''){
        alert('Invalid English Marks');
        mathsMarks.focus();
    }else if(parseInt(passingYear.value)<2000 || parseInt(passingYear.value)>2020 || passingYear.value===''){
        alert('Invalid Passing Year')
        passingYear.focus();
    }else{
        insertData();   
    }
});

if(localStorage.getItem('Student')==null){
    localStorage.setItem('Student',studentDetails);
}
else{
    studentDetails = JSON.parse(localStorage.getItem('Student'));
    displayData();

}


function insertData(){
    
    var today = new Date();
    var now = today.getDate()+'/'+ today.getMonth()+1 +'/'+ today.getFullYear();

    var average = (parseInt(mathsMarks.value)+parseInt(englishMarks.value))/2;
    //var student1 = new Student(studentName.value,mathsMarks.value,englishMarks.value,average,passingYear.value,now);
    studentDetails.push(new Student(studentName.value,mathsMarks.value,englishMarks.value,average,passingYear.value,now));
    localStorage.setItem('Student',JSON.stringify(studentDetails));

    console.log(JSON.parse(localStorage.getItem('Student')));             

    displayData();

}

function displayData(){

    for(var i=0;i<studentDetails.length;i++){
        tableBody.innerHTML += `<tr><td>${studentDetails[i].studentName}</td>
                               <td>${studentDetails[i].mathsMarks}</td>
                               <td>${studentDetails[i].englishMarks}</td>
                               <td>${studentDetails[i].average}</td>
                               <td>${studentDetails[i].passingYear}</td>
                               <td>${studentDetails[i].createdDate}</td>  
                               </tr>
                               `; 
    }
}