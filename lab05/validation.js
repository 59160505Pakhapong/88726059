function formValidation() {
    var uid = document.registform.userid;
    var passid = document.registform.passid;
    var uname = document.registform.username;
    var uadd = document.registform.address;
    var ucountry = document.registform.country;
    var uzip = document.registform.zip;
    var uemail = document.registform.email;
    var usex = document.registform.sex;

    if (validateUserID(uid,5,12)) {
        if (validatePassword(passid,7,12)) {
            if (allLetter(uname)) {
                if (alphanumeric(uadd)) {
                    if (countryselect(ucountry)) {
                        if (allnumeric(uzip)) {
                            if (validateEmail(uemail)) {
                                if (validateGender(usex)) {}
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function validateUserID(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (fld.value == "") {
        fld.style.background ='Yellow';
        error = "กรุณาป้อน User ID\n";
        alert(error);
        return false;
    
    } else if ((fld.value.length < 5) || (fld.value.length > 12)) {
        fld.style.background = 'Yellow';
        error = "User ID ต้องมีความยาว 5-12 ตัวอักษร\n";
        alert(error);
        return false;
    
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "User ID มีตัวอักษรที่ไม่ได้รัยอนุญาต\n";
        alert(error);
        return false;
    
    } else {
        fld.style.background = 'White';
    }
    return true;
}
function validatePassword(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "กรุณาป้อน Password\n";
        alert(error);
        return false;
    
    } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
        error = "Password ต้องมีความยาว 7-15 ตัวอักษร\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
    
    } else if (illegalChars.test(fld.value)) {
        error = "Password มีตัวอักษรที่ไม่ได้รับอนุญาต\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
    
    } else if ((fld.value.search(/[a-zA-Z]+/) == -1) || (fld.value.search(/[0-9]+/) == -1)) {
        error = "Password ต้องมีตัวเลขอย่างน้อย 1 ตัว\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
    
    } else {
        fld.style.background = 'White';
    }
    return true;
}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        alert('Username ต้องเป็นตัวอักษรเท่านั้น');
        return false;
    }
}

function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    } else {
        alert('Address ต้องเป็นตัวอักษรหรือตัวเลขเท่านั้น');
        uadd.focus();
        return false;
    }
}

function countryselect(ucountry) {
    if (ucountry.value == "Default") {
        alert('กรุณาเลือก Country');
        ucountry.focus();
        return false;
    } else {
        return true;
    }
}

function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
        return true;
    } else {
        alert('ZIP Code ต้องเป็นตัวเลขเท่านั้น');
        return false;
    }
}

function validateEmail(uemail) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(uemail.value)) {
        alert('Email ไม่ถูกต้อง');
        uemail.focus();
        return false;
    } else {
        return true;
    }
}

function validateGender(usex) {
    var x = 0
    for (i = 0; i < usex.length; ++i) {
        //alert(usex[i].checked)
        if (usex[i].checked) x++
    }
    if (x == 0) {
        alert('กรุณาเลือกเพศ');
        return false;
    } else {
        alert('Form Successfully Submitted');
        //window.location.reload()
        //return true;
    }
}



