var studentName = document.forms['formStudent']['studentName'];
var mathsMarks = document.forms['formStudent']['mathsMarks'];
var englishMarks = document.forms['formStudent']['englishMarks'];
var passingYear = document.forms['formStudent']['passingYear'];
var tableBody = document.getElementById('tbody');

var Student = function(studentName,mathsMarks,englishMarks,average,passingYear,createdDate){
    this.studentName = studentName;
    this.mathsMarks = mathsMarks;
    this.englishMarks = englishMarks;
    this.average = average;
    this.passingYear = passingYear;
    this.createdDate = createdDate;
}

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

function insertData(){
    var today = new Date();
    var now = today.getDate()+'/'+ today.getMonth()+1 +'/'+ today.getFullYear();
    var average = (parseInt(mathsMarks.value)+parseInt(englishMarks.value))/2;
    tableBody.innerHTML += `<tr><td>${studentName.value}</td>
                               <td>${mathsMarks.value}</td>
                               <td>${englishMarks.value}</td>
                               <td>${average}</td>
                               <td>${passingYear.value}</td>
                               <td>${now}</td>
                            </tr>
                            `;
                            
                            var student1 = new Student(studentName.value,mathsMarks.value,englishMarks.value,average,passingYear.value,now);
                            console.log(student1);
                            
}

