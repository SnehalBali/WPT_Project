$(()=>{
    let arr1=[];
    $('#submitbtn').click(()=>{
        let firstname = $("#fname").val();
        let lname = $("#lname").val();
        let gender = $("#gender").val();
        let dob = $("#dob").val();
        let age = $("#age").val();
        let contact = $("#contact").val();
        let nationality = $("#nationality").val();
        let email = $("#email").val();

        // localStorage.setItem("localfname",firstname);
        // localStorage.setItem("locallname",lname);
        // localStorage.setItem("localgender",gender);
        // localStorage.setItem("localdob",dob);
        // localStorage.setItem("localage",age);
        // localStorage.setItem("localcontact",contact);
        // localStorage.setItem("localnationality",nationality);
        // localStorage.setItem("localemail",email);

        arr1.push({First_Name:firstname, Last_Name:lname,Gender:gender,DOB:dob,Age:age,Contact:contact,Nationality:nationality,Email:email});
        console.log(arr1);
        console.log(arr1.length);
        localStorage.setItem("myarr1",arr1);
        // localStorage.setItem
    
        // let f=localStorage.getItem("localfname");
        // let l=localStorage.getItem("locallname");
        // let g=localStorage.getItem("localgender");
        // let d=localStorage.getItem("localdob");
        // let a=localStorage.getItem("localage");
        // let c=localStorage.getItem("localcontact");
        // let n=localStorage.getItem("localnationality");
        // let e=localStorage.getItem("localemail");

    })
});
// });
    
// $('#update').click(()=>{